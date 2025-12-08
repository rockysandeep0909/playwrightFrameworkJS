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

  await page.goto('https://www.saucedemo.com/');
  await page.locator("//input[@data-test='username']").fill('standard_user');
  await page.locator("//input[@data-test='password']").fill("secret_sauce1");
  await page.locator("//input[@id='login-button']").click();
  await console.log("login successful");
  await page.waitForTimeout(5000);

  // validation step - Assertions
  await expect(page.locator("//button[@class='error-button']")).toBeVisible();


})

test('TC 03 - Adding product to the cart and review cart item',async ({page})=>{

  await page.goto('https://www.saucedemo.com/');
  await page.locator("//input[@data-test='username']").fill('standard_user');
  await page.locator("//input[@data-test='password']").fill("secret_sauce");
  await page.locator("//input[@id='login-button']").click();
  await console.log("login successful");
  await page.waitForTimeout(5000);

  // validation step - Assertions
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  let message = await page.locator("//div[text()='Sauce Labs Backpack']").textContent();
  console.log("Item name is " + message);
  let text = await page.locator("//div[@class='inventory_item_name ']").allTextContents();
  console.log("Item names is " + text);

  // Adding product to the cart
  await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();
  await page.waitForTimeout(5000);

  // click on the cart icon
  await page.locator("//a[@class='shopping_cart_link']").click();
  await page.waitForTimeout(5000);

  // validation step - Assertions
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
  let cartItem = await page.locator("//div[@class='inventory_item_name']").textContent();
  console.log("Cart item is " + cartItem);  

  // click on checkout button
  await page.locator("//button[@id='checkout']").click();
  await page.waitForTimeout(5000);
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

  //validation of checkout page
}) 


