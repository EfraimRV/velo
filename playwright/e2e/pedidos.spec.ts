import { test } from '../support/fixtures'
import { generateOrderCode } from '../support/helpers'

test.describe('Consulta de Pedido', () => {

  test.beforeEach(async ({ app }) => {
    await app.orderLookup.open()
  })

  test('deve consultar um pedido aprovado', async ({ app }) => {
    const order = {
      number: 'VLO-I83WKC',
      status: 'APROVADO' as const,
      color: 'Glacier Blue',
      wheels: 'aero Wheels',
      customer: {
        name: 'Leo Rodrigues',
        email: 'lodrigues@gmail.com'
      },
      payment: 'À Vista'
    }

    await app.mock.getOrder(order)
    await app.orderLookup.searchOrder(order.number)
    await app.orderLookup.validateOrderDetails(order)
    await app.orderLookup.validateStatusBadge(order.status)
  })

  test('deve consultar um pedido reprovado', async ({ app }) => {
    const order = {
      number: 'VLO-9RRG78',
      status: 'REPROVADO' as const,
      color: 'Midnight Black',
      wheels: 'sport Wheels',
      customer: {
        name: 'Efraim Vasconcelos',
        email: 'efraimvasconceloss@gmail.com'
      },
      payment: 'À Vista'
    }

    await app.mock.getOrder(order)
    await app.orderLookup.searchOrder(order.number)
    await app.orderLookup.validateOrderDetails(order)
    await app.orderLookup.validateStatusBadge(order.status)
  })

  test('deve consultar um pedido em analise', async ({ app }) => {
    const order = {
      number: 'VLO-A5BS53',
      status: 'EM_ANALISE' as const,
      color: 'Lunar White',
      wheels: 'aero Wheels',
      customer: {
        name: 'Tatiane Nunes',
        email: 'Tati@gmail.com'
      },
      payment: 'À Vista'
    }

    await app.mock.getOrder(order)
    await app.orderLookup.searchOrder(order.number)
    await app.orderLookup.validateOrderDetails(order)
    await app.orderLookup.validateStatusBadge(order.status)
  })

  test('deve exibir mensagem quando o pedido não é encontrado', async ({ app }) => {
    const order = generateOrderCode()
    await app.mock.getOrder(null)
    await app.orderLookup.searchOrder(order)
    await app.orderLookup.validateOrderNotFound()
  })
})