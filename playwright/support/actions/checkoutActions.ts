import { Page, expect } from '@playwright/test'

export function createCheckoutActions(page: Page) {
  return {
    async open() {
      await page.goto('/order')
    },

    async expectLoaded() {
      await expect(page.getByRole('heading', { name: 'Finalizar Pedido' })).toBeVisible()
    },

    async expectSummaryTotal(price: string) {
      const total = page.getByTestId('summary-total-price')
      await expect(total).toBeVisible()
      await expect(total).toHaveText(price)
    },

    async fillPersonalInfo(data: { name?: string; surname?: string; email?: string; phone?: string; cpf?: string }) {
      if (data.name !== undefined) await page.getByTestId('checkout-name').fill(data.name)
      if (data.surname !== undefined) await page.getByTestId('checkout-surname').fill(data.surname)
      if (data.email !== undefined) await page.getByTestId('checkout-email').fill(data.email)
      if (data.phone !== undefined) await page.getByTestId('checkout-phone').fill(data.phone)
      if (data.cpf !== undefined) await page.getByTestId('checkout-cpf').fill(data.cpf)
    },

    async selectStore(storeName: string) {
      await page.getByTestId('checkout-store').click()
      // Radix/Shadcn select item can be clicked by its text or role option
      await page.getByRole('option', { name: storeName }).click()
    },

    async acceptTerms() {
      await page.getByTestId('checkout-terms').click()
    },

    async selectPaymentMethod(method: 'avista' | 'financiamento') {
      await page.getByTestId(`payment-${method}`).click()
    },

    async fillEntryValue(value: string) {
      await page.getByTestId('input-entry-value').fill(value)
    },

    async submitOrder() {
      await page.getByTestId('checkout-submit').click()
    },

    async expectValidationError(message: string) {
      const errorMsg = page.getByText(message)
      await expect(errorMsg).toBeVisible()
    },

    async expectToastError(message: string) {
      const toast = page.getByTestId('toast-error')
      await expect(toast).toBeVisible()
      await expect(toast).toContainText(message)
    }
  }
}
