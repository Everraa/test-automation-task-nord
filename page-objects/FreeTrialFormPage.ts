import { Page, Locator, expect } from '@playwright/test'

export class FreeTrialFormPage {
  readonly page: Page
  readonly formHeading: Locator
  readonly emailInput: Locator
  readonly getStartedButton: Locator

  constructor(page: Page) {
    this.page = page
    this.emailInput = page.getByPlaceholder('Your email address').first()
    this.getStartedButton = page
      .getByRole('button', { name: 'Get started' })
      .first()
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email)
  }

  async submitForm() {
    await this.getStartedButton.click()
  }
}
