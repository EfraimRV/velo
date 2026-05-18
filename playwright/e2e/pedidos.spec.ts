import { test, expect } from '@playwright/test';


///AAA - Arrange, Act, Assert
///PAV - Preparar, agir, verificar


test('Deve consultar um pedido aprovado', async ({ page }) => {
  //Arrange - Preparar
  await page.goto('http://localhost:5173/');
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');
  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');

  //Act - Agir
  await page.getByTestId('search-order-id').fill('VLO-I83WKC');
  await page.getByTestId('search-order-button').click();
  
  //Assert - Verificar
  await expect(page.getByTestId('order-result-id')).toBeVisible();
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-I83WKC');

  await expect(page.getByTestId('order-result-status')).toBeVisible();
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');
 
});
