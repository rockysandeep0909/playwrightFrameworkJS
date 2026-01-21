const { Given, When, Then } = require('@cucumber/cucumber')
const playwright = require('playwright')
const { expect } = require('@playwright/test')

Given('I am in login page of saucedemo', async function () {
  console.log("this is our first cucumber test running ..... lets get started")
  
  // Launch browser
  this.browser = await playwright.chromium.launch({ headless: false })
  this.context = await this.browser.newContext()
  this.page = await this.context.newPage()
  
  // Navigate to login page
  await this.page.goto("https://www.saucedemo.com/")
  console.log("Navigated to saucedemo login page")
})

When('I enter valid username', async function () {
  console.log("Entering valid username")
  const validUsername = "standard_user"
  
  // Fill username field
  
  await this.page.fill('#user-name', validUsername)
  console.log(`Entered username: ${validUsername}`)
})

When('I enter valid Password', async function () {
  console.log("Entering valid password")
  const validPassword = "secret_sauce"
  
  // Fill password field
  await this.page.fill('#password', validPassword)
  console.log(`Entered password: ${validPassword}`)
})

When('I click on login button', async function () {
  console.log("Clicking login button")
  
  // Click login button
  await this.page.click('#login-button')
  

})

Then('user should be redirected to saucedemo page', async function () {
  console.log("Verifying user redirection")
  
  // Verify URL changed to inventory page
  const currentUrl = this.page.url()
  expect(currentUrl).toContain('inventory.html')
  console.log(`Successfully redirected to: ${currentUrl}`)
  
  // Close browser after test
  await this.browser.close()
})

When('I enter invalid Password', async function () {
  console.log("Entering invalid password")
  const invalidPassword = "wrong_password"
  
  // Fill password field with invalid password
  await this.page.fill('#password', invalidPassword)
  console.log(`Entered invalid password: ${invalidPassword}`)
})

Then('user should see an error message', async function () {
           console.log("Verifying error message for invalid login")
           // Close browser after test
  await this.browser.close()
         });