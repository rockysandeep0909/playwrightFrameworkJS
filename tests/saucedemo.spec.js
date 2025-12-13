//const {test,expect}=require('@playwright/test')
import { test, expect } from '@playwright/test';

// Test case to login to saucedemo application
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

// Negative test case to login to saucedemo application
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
  // assertion for title
  await expect(page).toHaveTitle('Swag Labs');
  await page.locator("//input[@data-test='username']").fill('standard_user');
  await page.locator("//input[@data-test='password']").fill("secret_sauce");
  await page.locator("//input[@id='login-button']").click();
  await console.log("login successful");
  await page.waitForTimeout(5000);


  // // validation step - Assertions
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

 // await page.locator("//div[@class='inventory_list']/div[6]/div[2]/div[2]/button").click();
 // await page.pause();

  let ReceivedMessage = await page.locator("//div[text()='Sauce Labs Backpack']").textContent();
  console.log("Received message " + ReceivedMessage);
  let expectedMessage = 'Sauce Labs Backpack';
  await expect(page.locator("//div[text()='Sauce Labs Backpack']")).toHaveText(expectedMessage);



  let message2 = await page.locator("//div[@class='inventory_item_name ']").allTextContents();
  console.log("Item names is " + message2);

  let allprice= await page.locator("//div[@class='inventory_item_price']").allTextContents();
  console.log("Item prices are "+ allprice);

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

  await page.pause();
  await page.locator("//div[@class='inventory_item_name']").hover();
  // click on checkout button
  await page.locator("//button[@id='checkout']").click();
  await page.waitForTimeout(5000);
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

  //validation of checkout page

    // grab successful order message 
    // assertion ....

}) 

// selecting the sorting option from the dropdown
test('TC 04- Selecting sorting option from the dropdown',async ({page})=>{
  await page.goto('https://www.saucedemo.com/');
  await page.locator("//input[@data-test='username']").fill('standard_user');
  await page.locator("//input[@data-test='password']").fill("secret_sauce");
  await page.locator("//input[@id='login-button']").click();
  await console.log("login successful");
  await page.waitForTimeout(5000);
  // validation step - Assertions
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  let sortingoption=page.locator("//select[@class='product_sort_container']");

  await sortingoption.selectOption('hilo');
  await page.waitForTimeout(5000);
  
  await sortingoption.selectOption('lohi');
  await page.waitForTimeout(5000);

    await sortingoption.selectOption('za');
  await page.waitForTimeout(5000);


    await sortingoption.selectOption('az');
  await page.waitForTimeout(5000);
})



test('TC -05 - Navigation methods - paytm application',async ({page})=>{

  await page.goto("https://paytm.com/");
  await page.locator("//li[text()='Recharge & Bills']").hover();
  await page.screenshot({ path: 'paytm.png' });
  await page.goBack();
  await page.waitForTimeout(5000);
  await page.goForward();
  await page.reload();
})

// test to upload a file using playwright

test('TC-06 - File upload using playwright',async ({page})=>{
  await page.goto("https://the-internet.herokuapp.com/upload");
  await page.locator("//input[@id='file-upload']").setInputFiles("C:\\Users\\Sandeep\\Desktop\\Repos\\Batch3\\programs\\fileupload.txt");
  await page.locator("//input[@id='file-submit']").click();
  await page.waitForTimeout(5000);
  //assertion
  await expect(page.locator("//h3")).toHaveText("File Uploaded!");
})

// visual testing using playwright 
test('TC-07 - Visual testing using playwright',async ({page})=>{
  await page.goto("https://www.instagram.com/");
  await page.waitForTimeout(5000);
  expect(await page.screenshot()).toMatchSnapshot("insta.png");


})