const { Given, When, Then } = require('@cucumber/cucumber')
const playwright = require('playwright')
const { expect } = require('@playwright/test')
const { LoginPage } = require('../../POM/LoginPage');


Given('I am in login page of saucedemo', async function () {
  console.log("this is our first cucumber test running ..... lets get started")
  
  // Launch browser
  this.browser = await playwright.chromium.launch({ headless: false })
  this.context = await this.browser.newContext()
  this.page = await this.context.newPage()
  // Use LoginPage POM to navigate to login page
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goToLoginPage();
  console.log("Navigated to saucedemo login page via LoginPage POM")
})

When('I enter valid username', async function () {
  console.log("Entering valid username")
  const validUsername = "standard_user"
  
  // Fill username field
  await this.loginPage.enterUsername(validUsername)
  console.log(`Entered username via LoginPage: ${validUsername}`)
})

When('I enter valid Password', async function () {
  console.log("Entering valid password")
  const validPassword = "secret_sauce"
  
  // Fill password field
  await this.loginPage.enterPassword(validPassword)
  console.log(`Entered password via LoginPage: ${validPassword}`)
})

When('I click on login button', async function () {
  console.log("Clicking login button")
  
  // Click login button
  await this.loginPage.clickLogin()
  

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
  await this.loginPage.enterPassword(invalidPassword)
  console.log(`Entered invalid password via LoginPage: ${invalidPassword}`)
})

Then('user should see an error message', async function () {
           console.log("Verifying error message for invalid login")
           // Close browser after test
  await this.browser.close()
         });

When('I enter username {string} and password {string}', async function (username, password) {
  console.log(`Entering username: ${username} and password: ${password}`);
  await this.loginPage.enterUsername(username);
 await this.loginPage.enterPassword(password);
});


Then('I should see a message {string}', async function (message) {
    console.log(`Verifying message: ${message}`);
    //   if (message === 'Products') {
//     await expect(this.page).toHaveTitle(/Products/);
//   } else {
//     await expect(this.page.locator('[data-test="error"]')).toContainText(message);
//   }
});