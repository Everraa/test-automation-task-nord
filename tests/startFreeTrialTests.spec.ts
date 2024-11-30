import { test, expect } from '@playwright/test'
import { HomePage } from '../page-objects/HomePage'
import { FreeTrialFormPage } from '../page-objects/FreeTrialFormPage'
import { PlanSelectionPage } from '../page-objects/PlanSelectionPage'

test.describe('Start Free Trial Tests', () => {
  let homePage: HomePage
  let freeTrialFormPage: FreeTrialFormPage
  let planSelectionPage: PlanSelectionPage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    freeTrialFormPage = new FreeTrialFormPage(page)
    planSelectionPage = new PlanSelectionPage(page)

    await homePage.visit()
    await homePage.acceptCookies()
    await homePage.goToPersonalPlanSelection()

    await planSelectionPage.clickGetStartedFree()
  })

  test('Positive scenario: Start free trial by filling form', async ({
    page,
  }) => {
    const currentTime = new Date().getTime()
    await freeTrialFormPage.fillEmail(`${currentTime}@gmail.com`)
    await freeTrialFormPage.submitForm()

    await expect(page).toHaveURL('/downloading/')
  })

  test('Negative scenario: Start free trial with registered email', async ({
    page,
  }) => {
    await freeTrialFormPage.fillEmail('test1@gmail.com')
    await freeTrialFormPage.submitForm()

    const errorMessage = page.getByTestId('alert').locator('div')
    await expect(errorMessage).toBeVisible()
    await expect(errorMessage).toHaveText('Trial email already registered')
  })
})
