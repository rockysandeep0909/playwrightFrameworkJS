const { Given, When, Then } = require('@cucumber/cucumber')
const playwright = require('playwright')

Given('I am in login page of saucedemo', async function () {

  console.log("this is our first cucumber test running ..... lets get started")
  this.browser=playwright.chromium.launch({headless:false});
  this.context= (await (this.browser)).newContext();
  this.page=(await (this.context)).newPage();
  (await this.page).goto("https://www.saucedemo.com/");



});


When('I enter valid username', function () {
  console.log("valid username steps")
});


When('I enter valid Password', function () {
  console.log("valid   steps")
});

When('I click on login button', function () {
  console.log("login button click")
});

Then('user should be redirected to saucedemo page', function () {
  console.log("final page ")
});

When('I enter invalid Password', function () {
  console.log(" this is the last step for today .. we will break after this")
});