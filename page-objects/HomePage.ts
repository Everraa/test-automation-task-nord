import { Page, Locator } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly acceptCookiesButton: Locator
  readonly personalLink: Locator

  constructor(page: Page) {
    this.page = page
    this.acceptCookiesButton = page.getByTestId('consent-widget-accept-all')
    this.personalLink = page
      .locator('#Hero')
      .getByRole('link', { name: 'For Personal' })
  }

  async visit() {
    await this.page.goto('/')
  }

  async acceptCookies() {
    await this.acceptCookiesButton.click()
  }

  async goToPersonalPlanSelection() {
    await this.personalLink.click()
  }
}
