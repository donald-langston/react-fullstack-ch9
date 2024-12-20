export class AuthFixture {
  constructor(page) {
    this.page = page
  }

  async signUpAndLogin() {
    const testUser = 'test' + Date.now()
    await this.page.goto('/signup')
    await this.page.getByLabel('Username:').press('Enter')
    await this.page.getByLabel('Username:').fill(testUser)
    await this.page.getByLabel('Password:').press('Enter')
    await this.page.getByLabel('Password:').fill('password')
    await this.page.getByRole('button', { name: 'Sign Up' }).press('Enter')
    await this.page.waitForURL('**/login')
    await this.page.getByLabel('Username:').press('Enter')
    await this.page.getByLabel('Username:').fill(testUser)
    await this.page.getByLabel('Password:').press('Enter')
    await this.page.getByLabel('Password:').fill('password')
    await this.page.getByRole('button', { name: 'Log In' }).press('Enter')
    await this.page.waitForURL('**/')
    return testUser
  }
}
