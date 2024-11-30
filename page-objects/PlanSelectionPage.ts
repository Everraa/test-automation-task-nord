import { Page, Locator } from '@playwright/test'

export class PlanSelectionPage {
  readonly page: Page
  readonly getStartedLink: Locator

  constructor(page: Page) {
    this.page = page
    this.getStartedLink = page
      .getByRole('link', { name: 'Get Started' })
      .first()
  }

  async clickGetStartedFree() {
    await this.getStartedLink.click()
  }
}
