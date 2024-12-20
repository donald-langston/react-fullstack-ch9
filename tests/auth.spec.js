import { test, expect } from '@playwright/test'

test('allows sign up and login', async ({ page }) => {
  test.etTimeout(120000)
  const testUser = 'test' + Date.now()
  await page.goto('/')
  console.log(testUser)
  console.log(page.url())
  //expect(page).toHaveURL('http:localhost:5173')
  await page.getByRole('link', { name: 'Sign Up' }).press('Enter')
  await page.getByLabel('Username:').press('Enter')
  await page.getByLabel('Username:').fill(testUser)
  await page.getByLabel('Password:').press('Enter')
  await page.getByLabel('Password:').fill('test')
  await page.getByRole('button', { name: 'Sign Up' }).press('Enter')
  await page.waitForURL('**/login')
  await page.getByLabel('Username:').fill(testUser)
  await page.getByLabel('Password:').fill('test')
  await page.getByRole('button', { name: 'Log In' }).press('Enter')
  await page.waitForURL('**/')

  await expect(page.locator('nav')).toContainText('Logged in as ' + testUser)
})
