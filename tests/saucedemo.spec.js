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


test('TC - 11 handling tables in playwright',async ({page})=>{
  await page.goto("https://demo.guru99.com/test/web-table-element.php");
  // get all rows
  let rows=await page.locator("//table[@class='dataTable']/tbody/tr").count();
  console.log("Number of rows are "+ rows);
  for(let i=1;i<=rows;i++){
    let companyName=await page.locator("//table[@class='dataTable']/tbody/tr["+i+"]/td[1]").textContent();
    let currentPrice=await page.locator("//table[@class='dataTable']/tbody/tr["+i+"]/td[4]").textContent();
    let percentageChange=await page.locator("//table[@class='dataTable']/tbody/tr["+i+"]/td[5]").textContent();
    console.log("Company Name: "+ companyName + " Current Price: "+ currentPrice+ " Percentage Change: "+ percentageChange);
  }



  
})


test("TC -12  - Launching paytm using browser context",async ({browser})=>{ 
  const context=await browser.newContext();
  const page=await context.newPage();
  await page.goto("https://www.paytm.com/");
  await page.waitForTimeout(5000);
  await page.locator("//li[text()='Recharge & Bills']").hover();

  const mobileRechargeLink=await page.locator("//li[text()='Recharge & Bills']/..//a[text()='Mobile Recharge']");
  //await page.locator("//li[text()='Recharge & Bills']/..//a[text()='Mobile Recharge']").click();
    const [newTab]=await Promise.all([
    context.waitForEvent('page'),
    mobileRechargeLink.click()
  ]);
// handling new tab 
   await newTab.locator("//label[text()='Postpaid']").click();

   await newTab.locator("//button[contains(@class,'_15qf _2qE6')]").click();

   await page.waitForTimeout(5000);

   await page.locator("//span[@title='Sign In']").click();
   await page.waitForTimeout(5000);
})


test('TC-13 - File download using playwright',async ({page})=>{
  await page.goto("https://www.selenium.dev/downloads/");
  // click on download link
  
  const [download]=await Promise.all([
    page.waitForEvent('download'),
    page.locator("//div[@class='row justify-content-center px-5 pb-5']//div[3]//div[1]//div[2]//p[2]//a[1]").click()
  ]); 
  // save download to specific location
  const downloadPath = 'C:\\Users\\Sandeep\\Desktop\\Repos\\Batch3\\downloadedfiles\\' + download.suggestedFilename();
  await download.saveAs(downloadPath);
  console.log("Download saved to: "+ downloadPath);

  
})


// test to handle alerts in playwright

test('TC-14 - Handling alerts in playwright',async ({page})=>{
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  // click on js alert button
  page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);    
    await dialog.accept();
  });


  //page.on('dialog', dialog => dialog.accept());

  await page.locator("//button[text()='Click for JS Alert']").click();

  await page.waitForTimeout(5000);   
})

// test to handle js confirm alert in playwright

test('TC-15 - Handling js confirm alert in playwright',async ({page})=>{
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  // click on js confirm button
  page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.dismiss();
  });
  await page.locator("//button[text()='Click for JS Confirm']").click();
  await page.waitForTimeout(5000);   
})

// test to handle js prompt alert in playwright
test('TC-16 - Handling js prompt alert in playwright',async ({page})=>{
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  await page.pause();
  // click on js prompt button
  page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept("sandeep is entering the prompt");
  }); 
  await page.locator("//button[text()='Click for JS Prompt']").click();
  
  await page.waitForTimeout(5000);   
  page.pause();
})

// test to handle shadow dom in playwright
test('TC-17 - Handling shadow dom in playwright',async ({page})=>{
  await page.goto("https://books-pwakit.appspot.com/");
  // click on explore shadow dom button
  const shadowHost=page.locator("book-app");
  const shadowRoot=await shadowHost.evaluateHandle((element)=>element.shadowRoot);
  const exploreButton=shadowRoot.asElement().locator("a#explore");
  await exploreButton.click();
  await page.waitForTimeout(5000);   
})

// test to handle drag and drop in playwright
test('TC-18 - Handling drag and drop in playwright',async ({page})=>{
  await page.goto("https://demoqa.com/droppable");
  // drag and drop
  const source=page.locator("#draggable");
  const target=page.locator("#droppable");
  await source.dragTo(target);
  await page.waitForTimeout(5000);   
})

// test to handle slider in playwright
test('TC-19 - Handling slider in playwright',async ({page})=>{
  await page.goto("https://demoqa.com/slider");
  // move slider
  const slider=page.locator("input[type='range']");
  await slider.fill("75");
  await page.waitForTimeout(5000);   
})
// test to handle cookies in playwright
test('TC-20 - Handling cookies in playwright',async ({page})=>{
  await page.goto("https://www.amazon.com/"); 
  // get cookies
  const cookies=await page.context().cookies();
  console.log("Cookies: ", cookies);
  // set cookie
  await page.context().addCookies([{
    name: 'testCookie',
    value: 'cookieValue',
    domain: '.amazon.com',
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'Lax'
  }]);
  console.log("Cookie added");
  await page.waitForTimeout(5000);   
})

// test to handle geolocation in playwright
test('TC-21 - Handling geolocation in playwright',async ({browser})=>{
  const context=await browser.newContext({
    geolocation: {latitude:37.7749, longitude:-122.4194},
    permissions: ['geolocation']
  }); 
  const page=await context.newPage();
  await page.goto("https://www.google.com/maps"); 
  await page.waitForTimeout(5000);   
})
// test to handle network interception in playwright
test('TC-22 - Handling network interception in playwright',async ({page})=>{
  await page.route('**/api/**', route => {  
    console.log("Intercepted request: ", route.request().url());
    route.continue();
  });
  await page.goto("https://demoqa.com/"); 
  await page.waitForTimeout(5000);   
})
// test to handle performance metrics in playwright
test('TC-23 - Handling performance metrics in playwright',async ({page})=>{
  await page.goto("https://www.wikipedia.org/");  
  const performanceTiming=await page.evaluate(() => JSON.stringify(window.performance.timing));
  console.log("Performance Timing: ", performanceTiming);
  await page.waitForTimeout(5000);   
})
// test to handle local storage in playwright
test('TC-24 - Handling local storage in playwright',async ({page})=>{
  await page.goto("https://www.example.com/");
  // set local storage item
  await page.evaluate(() => {
    localStorage.setItem('testKey', 'testValue');
  });
  console.log("Local storage item set");
  // get local storage item
  const value=await page.evaluate(() => { 
    return localStorage.getItem('testKey');
  }
  );
  console.log("Local storage item value: ", value);
  await page.waitForTimeout(5000);   
})
// test to handle session storage in playwright
test('TC-25 - Handling session storage in playwright',async ({page})=>{
  await page.goto("https://www.example.com/");
  // set session storage item
  await page.evaluate(() => {
    sessionStorage.setItem('sessionKey', 'sessionValue');
  }); 
  console.log("Session storage item set");
  // get session storage item
  const value=await page.evaluate(() => { 
    return sessionStorage.getItem('sessionKey');
  }
  );  
  console.log("Session storage item value: ", value);
  await page.waitForTimeout(5000);   
}
);  


// test to handle http authentication in playwright
test('TC-26 - Handling http authentication in playwright',async ({browser})=>{
  const context=await browser.newContext({
    httpCredentials: {
      username: 'admin',
      password: 'admin' 
    }
  }); 
  const page=await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/basic_auth"); 
  await page.waitForTimeout(5000);   
});

// test to handle timeouts in playwright
test('TC-27 - Handling timeouts in playwright',async ({page})=>{
  await page.goto("https://www.example.com/");
  // set timeout
  page.setDefaultTimeout(10000);  
  // perform some action
  await page.waitForTimeout(5000);   
});
// test to handle scrolling in playwright
test('TC-28 - Handling scrolling in playwright',async ({page})=>{
  await page.goto("https://www.example.com/");
  // scroll down
  await page.evaluate(() => {
    window.scrollBy(0, window.innerHeight);
  });
  await page.waitForTimeout(5000);   
  // scroll up
  await page.evaluate(() => {
    window.scrollBy(0, -window.innerHeight);
  });
  await page.waitForTimeout(5000);   
});

// test to handle keyboard events in playwright
test('TC-29 - Handling keyboard events in playwright',async ({page})=>{
  await page.goto(process.env.BASE_URL);
  const searchBox=page.locator("//input[@data-test='username']");
  await searchBox.click();
  await searchBox.fill("Playwright testing");
  
  await page.keyboard.press('ArrowLeft');
  await page.keyboard.press('ArrowLeft');
  await page.keyboard.press('Backspace');
  await page.keyboard.type('D');
  await page.pause();
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
});


// test to handle mouse events in playwright
test('TC-30 - Handling mouse events in playwright',async ({page})=>{
  await page.goto("https://www.example.com/");
  const element=page.locator("h1");
  const box=await element.boundingBox();
  if(box){
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.up();
  }
  await page.waitForTimeout(5000);   
});

// test to handle touch events in playwright
test('TC-31 - Handling touch events in playwright',async ({page})=>{
  await page.goto("https://www.example.com/");
  const element=page.locator("h1");
  const box=await element.boundingBox();
  if(box){
    await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2);
  }
  await page.waitForTimeout(5000);
}); 

// test to handle media playback in playwright
test('TC-32 - Handling media playback in playwright',async ({page})=>{
  await page.goto("https://www.w3schools.com/html/html5_video.asp");
  const video=page.locator("video");
  await video.click();
  await page.waitForTimeout(10000);   
  await video.click();
  await page.waitForTimeout(5000);   
});
// test to handle geolocation permission denial in playwright
test('TC-33 - Handling geolocation permission denial in playwright',async ({browser})=>{
  const context=await browser.newContext({
    permissions: []
  }); 
  const page=await context.newPage();
  await page.goto("https://www.google.com/maps"); 
  await page.waitForTimeout(5000);   
});

// test to handle network offline mode in playwright
test('TC-34 - Handling network offline mode in playwright',async ({page})=>{
  await page.goto("https://www.wikipedia.org/");  
  await page.context().setOffline(true);
  console.log("Network set to offline mode");
  await page.waitForTimeout(5000);   
  await page.context().setOffline(false);
  console.log("Network set to online mode");
  await page.waitForTimeout(5000);   
});

// test to handle browser context storage state in playwright
test('TC-35 - Handling browser context storage state in playwright',async ({browser})=>{
  const context=await browser.newContext();
  const page=await context.newPage();
  await page.goto(process.env.BASE_URL);
  await page.locator("//input[@data-test='username']").fill(process.env.user_Name);
  await page.locator("//input[@data-test='password']").fill(process.env.PASSWORD);
  await page.locator("//input[@id='login-button']").click();
  await page.waitForTimeout(5000);  
  await context.storageState({path: 'storageState.json'});
  console.log("Storage state saved");
});

// test to handle browser context storage state loading in playwright
test('TC-36 - Handling browser context storage state loading in playwright',async ({browser})=>{
  const context=await browser.newContext({
    storageState: 'storageState.json'
  });
  const page=await context.newPage();
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.waitForTimeout(5000);  
  console.log("Storage state loaded");
});

// test to handle http headers in playwright
test('TC-37 - Handling http headers in playwright',async ({browser})=>{
  const context=await browser.newContext({
    extraHTTPHeaders: {
      'X-Custom-Header': 'CustomHeaderValue'
    }
  });
  const page=await context.newPage();
  await page.goto("https://www.example.com/"); 
  await page.waitForTimeout(5000);   
}
);
// test to handle http response status in playwright
test('TC-38 - Handling http response status in playwright',async ({page})=>{
  page.on('response', response => { 
    console.log(`Response: ${response.url()} - ${response.status()}`);
  });
  await page.goto("https://www.example.com/"); 
  await page.waitForTimeout(5000);   
});
// test to handle http request method in playwright
test('TC-39 - Handling http request method in playwright',async ({page})=>{
  page.on('request', request => { 
    console.log(`Request: ${request.url()} - ${request.method()}`);
  });
  await page.goto("https://www.example.com/"); 
  await page.waitForTimeout(5000);   
}
);  

// test to handle http request post data in playwright
test('TC-40 - Handling http request post data in playwright',async ({page})=>{
  page.on('request', request => { 
    if(request.method() === 'POST'){
      console.log(`POST Request: ${request.url()} - ${request.postData()}`);
    }
  });
  await page.goto("https://www.example.com/"); 
  await page.waitForTimeout(5000);   
});


// test to handle autosuggest dropdown in playwright
test('TC-41 - Handling autosuggest dropdown in playwright',async ({page})=>{
  await page.goto("https://www.wikipedia.org/");
  const searchBox=page.locator("//input[@id='searchInput']");
  await searchBox.fill("Playwright");
  await page.waitForTimeout(2000);
  const suggestions=page.locator("//div[@class='suggestions-dropdown']/a");
  const count=await suggestions.count();
   console.log("Number of suggestions: "+ count);
   const expectedtext="Playwright (software)End-to-end testing framework"
  for(let i=0;i<count;i++){
    const suggestionText=await suggestions.nth(i).textContent();
    console.log("Suggestion "+ (i+1) + ": " + suggestionText);
    if(suggestionText==expectedtext){
      await suggestions.nth(i).click();
      
    }
  await page.pause();
  } 
  await page.waitForTimeout(5000);   
});

// test to handle iframe navigation in playwright
test('TC-42 - Handling iframe navigation in playwright', async ({page}) => {
  await page.goto("https://the-internet.herokuapp.com/iframe");
  const iframeUtil = new IFrameUtil();
  const frame = await iframeUtil.getFrameBySelector(page, 'iframe[title="Rich Text Area"]');
  await frame.locator('body').fill('Navigated and filled text in iframe');
  const text = await frame.locator('body').textContent();
  console.log("Frame text after navigation: " + text);
});

// test to handle iframe without using iframeutil in playwright
test('TC-43 - Handling iframe without using iframeutil in playwright', async ({page}) => {
  await page.goto("https://the-internet.herokuapp.com/iframe");
  const frame = page.frameLocator('iframe[title="Rich Text Area"]');
  await frame.locator('body').fill('Filled text in iframe without iframeutil');
  const text = await frame.locator('body').textContent();
  console.log("Frame text without iframeutil: " + text);
});