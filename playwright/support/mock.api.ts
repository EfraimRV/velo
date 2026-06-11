import { Page } from '@playwright/test'

export async function mockCreditAnalysis(page: Page, score: number) {
  await page.route('**/functions/v1/credit-analysis', async (route) => {
    if (score === -1) {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal Server Error' }),
      });
    } else {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ score }),
      });
    }
  });
}

export async function mockGetOrder(page: Page, order: any) {
  await page.route('**/rest/v1/orders?select=*', async (route) => {
    const url = new URL(route.request().url());
    const orderNumberParam = url.searchParams.get('order_number');
    const orderNumber = orderNumberParam ? orderNumberParam.replace('eq.', '') : '';

    if (order && order.number === orderNumber) {
      const dbOrder = {
        id: 'db-id-123',
        order_number: order.number,
        color: order.color === 'Glacier Blue' ? 'glacier-blue' : order.color === 'Midnight Black' ? 'midnight-black' : 'lunar-white',
        wheel_type: order.wheels.toLowerCase().includes('sport') ? 'sport' : 'aero',
        optionals: order.optionals || [],
        customer_name: order.customer.name,
        customer_email: order.customer.email,
        customer_phone: order.customer.phone || '(11) 99999-9999',
        customer_cpf: order.customer.document || '123.456.789-00',
        payment_method: order.payment === 'À Vista' ? 'avista' : 'financiamento',
        total_price: 40000,
        status: order.status,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(dbOrder),
      });
    } else {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(null),
      });
    }
  });
}
