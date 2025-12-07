//const {test,expect}=require('@playwright/test')
import { test, expect } from '@playwright/test';


test('TC 01 - login to saucedemo applicaiton using valid username and password ',async ({page})=>{

  await  page.goto('https://www.saucedemo.com/');
  await  page.locator("//input[@data-test='username']").fill('standard_user');
  await page.locator("//input[@data-test='password']").fill("secret_sauce");
  await page.locator("//input[@id='login-button']").click();
  await console.log("login successful");
  await page.waitForTimeout(5000);

  // validation step - Assertions
 await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');




}) 

test('TC 02 login to saucedemo applicaiton with invalid username and password ',async ({page})=>{

  await  page.goto('https://www.saucedemo.com/');
  await  page.locator("//input[@data-test='username']").fill('standard_user');
  await page.locator("//input[@data-test='password']").fill("secret_sauce1");
  await page.locator("//input[@id='login-button']").click();
  await console.log("login successful");
  await page.waitForTimeout(5000);

  // validation step - Assertions
await expect(page.locator("//button[@class='error-button']")).toBeVisible();


})