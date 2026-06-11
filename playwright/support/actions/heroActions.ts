import { Page, expect } from '@playwright/test'

export function createHeroActions(page: Page) {
  return {
    async open() {
      await page.goto('/')
    },

    async expectTitle() {
      await expect(page).toHaveTitle(/Velô by Papito/)
    },

    async clickHeaderConfigure() {
      await page.getByTestId('header-cta').click()
    },

    async clickHeroConfigure() {
      await page.getByTestId('hero-cta-primary').click()
    },

    async clickCtaConfigure() {
      await page.getByTestId('cta-button').click()
    },

    async clickLogo() {
      await page.getByTestId('header-logo').click()
    },

    async openMobileMenu() {
      await page.getByTestId('header-menu-toggle').click()
    },

    async clickMobileConfigure() {
      const mobileNav = page.getByTestId('header-mobile-nav')
      await mobileNav.getByRole('link', { name: 'Configure o Seu' }).click()
    },

    async resizeToMobile() {
      await page.setViewportSize({ width: 375, height: 812 })
    }
  }
}
