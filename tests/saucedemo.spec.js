//const {test,expect}=require('@playwright/test')
import { test, expect } from '@playwright/test';
import 'dotenv/config';
import logger from '../utils/logger';
const TabUtil = require('../utils/tabutil');
const tabUtil = new TabUtil();
const IFrameUtil = require('../utils/iframeutil');

function getRandomNumber(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

// Test case to login to saucedemo application
test.only('TC 01 - login to saucedemo applicaiton using valid username and password ',async ({page})=>{
  logger.info("=========================");
  logger.info("Executing TC 01 - login to saucedemo applicaiton using valid username and password");
  logger.info('Starting login test');
  await  page.goto(process.env.BASE_URL);
  logger.info('Navigated to login page');



   
  await  page.locator("//input[@data-test='username']").fill(process.env.user_Name);
    logger.info('Entered username');
  await page.locator("//input[@data-test='password']").fill(process.env.PASSWORD);
   logger.info('Entered password');
  await page.locator("//input[@id='login-button']").click();
 
  
  await page.waitForTimeout(5000);


  // validation step - Assertions
 await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html1');
 logger.info('Login successful');
}) 

// Negative test case to login to saucedemo application
test('TC 02 login to saucedemo applicaiton with invalid username and password ',async ({page})=>{

  await page.goto(process.env.BASE_URL);
  await page.locator("//input[@data-test='username']").fill(process.env.user_Name);
  await page.locator("//input[@data-test='password']").fill(process.env.PASSWORD);
  await page.locator("//input[@id='login-button']").click();
  await console.log("login successful");
  await page.waitForTimeout(Number(process.env.customtimeout));
  console.log(getRandomNumber(1,1000));
  // validation step - Assertions
  await expect(page.locator("//button[@class='error-button']")).toBeVisible();


})

test('TC 03 - Adding product to the cart and review cart item',async ({page})=>{

  await page.goto(process.env.BASE_URL);
  // assertion for title
  await expect(page).toHaveTitle('Swag Labs');
  await page.locator("//input[@data-test='username']").fill(process.env.user_Name);
  await page.locator("//input[@data-test='password']").fill(process.env.PASSWORD);
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

  //await page.pause();
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
  await page.goto(process.env.BASE_URL);
  await page.locator("//input[@data-test='username']").fill(process.env.user_Name);
  await page.locator("//input[@data-test='password']").fill(process.env.PASSWORD);

  // utility interactionutil.js
  const InteractionUtil = require('../utils/interactionutil');
  const interactionUtil = new InteractionUtil();  
  await interactionUtil.clickElement(page.locator("//input[@id='login-button']"));
  await page.locator("//input[@id='login-button']").click();
  await console.log("login successful");
  await page.waitForTimeout(5000);
  // validation step - Assertions
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  let sortingoption=page.locator("//select[@class='product_sort_container']");
// use utils/dropdownutil.js
  const dropdownUtil = new DropdownUtil();

  await dropdownUtil.selectDropdownOption(CartPage.sortingoption, 'hilo');
  await page.waitForTimeout(5000);
  
  await sortingoption.selectOption('lohi');
  await page.waitForTimeout(5000);

    await sortingoption.selectOption('za');
  await page.waitForTimeout(5000);


    await sortingoption.selectOption('az');
  await page.waitForTimeout(5000);
})



test('TC -05 - Navigation methods - paytm application',async ({page})=>{

  await page.goto(process.env.paytmurl);
  await page.locator("//li[text()='Recharge & Bills']").hover();
  await page.screenshot({ path: 'paytm2.png' });
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


// to user browser context to launch instagram

test("TC -08  - Launch instagram using browser context",async ({browser})=>{ 
  const context=await browser.newContext();
  const page=await context.newPage();
  await page.goto("https://www.instagram.com/");
  await page.waitForTimeout(5000);

})

test('TC-09 - Handling multiple tabs using playwright',async ({page})=>{
  await page.goto("https://demoqa.com/browser-windows");
  // click on new tab button
  await tabUtil.openNewTabWithURL(page.browser(), page.context(), "https://demoqa.com/browser-windows");
  await page.waitForTimeout(5000);
})


test('TC-10 - Handling iframes in playwright', async ({page}) => {
  const iframeUtil = new IFrameUtil();
  
  await page.goto("https://the-internet.herokuapp.com/iframe");
  await page.waitForTimeout(2000);

  // Method 1: Using frameLocator
  const frameLocator = page.frameLocator('iframe[title="Rich Text Area"]');
  await frameLocator.locator('body').fill('Hello from iframe');
  
  // Method 2: Using utility
  const text = await iframeUtil.getTextFromFrame(
    page, 
    'iframe[title="Rich Text Area"]', 
    'body'
  );
  console.log("Frame text: " + text);
});


test('handling tables in playwright',async ({page})=>{
  await page.goto("https://demo.guru99.com/test/web-table-element.php");
  // get all rows
  let rows=await page.locator("//table[@class='dataTable']/tbody/tr").count();
  console.log("Number of rows are "+ rows);
  for(let i=1;i<=rows;i++){
    let companyName=await page.locator("//table[@class='dataTable']/tbody/tr["+i+"]/td[1]").textContent();
    let currentPrice=await page.locator("//table[@class='dataTable']/tbody/tr["+i+"]/td[4]").textContent();
    console.log("Company Name: "+ companyName + " Current Price: "+ currentPrice);
  }



  
})