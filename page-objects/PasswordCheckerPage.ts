import { Page, Locator, expect } from '@playwright/test'

export class PasswordCheckerPage {
  readonly page: Page
  readonly passwordInput: Locator
  readonly validPasswordMessage: Locator
  readonly weakPasswordMessage: Locator

  constructor(page: Page) {
    this.page = page
    this.passwordInput = page.locator('#password')
    this.validPasswordMessage = page.locator('.text-green.uppercase')
    this.weakPasswordMessage = page.locator('.text-red.uppercase')
  }

  async visit() {
    await this.page
      .locator('[data-ga-slug="Link to /secure-password/"]')
      .click()
    await expect(this.page).toHaveURL('/secure-password/')
  }

  async checkPassword(password: string) {
    await this.passwordInput.fill(password)
  }
}
