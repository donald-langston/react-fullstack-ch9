import { test, expect } from '@playwright/test'

test('allows sign up and login', async ({ page }) => {
  //.setTimeout(60000)
  const testUser = 'test' + Date.now()
  await page.goto('/')
  console.log(testUser)
  expect(page).toHaveURL('http:localhost:5173')
  /*  await page.getByRole('link', { name: 'Sign Up' }).click()
  await page.getByLabel('Username:').click()
  await page.getByLabel('Username:').fill(testUser)
  await page.getByLabel('Password:').click()
  await page.getByLabel('Password:').fill('test')
  await page.getByRole('button', { name: 'Sign Up' }).click() */
  // await page.waitForURL('**/login')
  /* await page.getByLabel('Username:').click()
  await page.getByLabel('Username:').fill(testUser)
  await page.getByLabel('Password:').click()
  await page.getByLabel('Password:').fill('test')
  await page.getByRole('button', { name: 'Log In' }).click() */
  //await page.waitForURL('**/')

  //await expect(page.locator('nav')).toContainText('Logged in as ' + testUser)
})
