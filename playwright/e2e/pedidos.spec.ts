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
  

  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-I83WKC');
  await page.getByRole('button', { name: 'Buscar Pedido' }).click();
  
  //Assert - Verificar
  await expect(page.getByText('VLO-I83WKC')).toBeVisible({timeout: 10_000});
  await expect(page.getByText('APROVADO')).toBeVisible();
});
