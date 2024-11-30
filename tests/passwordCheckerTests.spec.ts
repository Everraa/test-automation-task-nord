import { test, expect } from '@playwright/test'
import { HomePage } from '../page-objects/HomePage'
import { PasswordCheckerPage } from '../page-objects/PasswordCheckerPage'
import { RandomValueGenerator } from '../helpers/randomValueGenerator'

test.describe('Password Checker Tests', () => {
  let passwordCheckerPage: PasswordCheckerPage

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page)
    passwordCheckerPage = new PasswordCheckerPage(page)

    await homePage.visit()
    await homePage.acceptCookies()
    await passwordCheckerPage.visit()
  })

  test('Strong password scenario', async () => {
    const password = RandomValueGenerator.generateValidPassword(12)
    await passwordCheckerPage.checkPassword(password)

    await expect(passwordCheckerPage.validPasswordMessage).toHaveText('Strong')
  })

  test('Weak password scenario', async () => {
    const password = RandomValueGenerator.generateRandomLowercaseString(10)
    await passwordCheckerPage.checkPassword(password)

    await expect(passwordCheckerPage.weakPasswordMessage).toHaveText('Weak')
  })
})
