import { test, expect } from '@playwright/test';
import 'dotenv/config';
const logger = require('../utils/logger');

const DropdownUtil = require('../utils/dropdownutil');

test('TC-01- Upload a file to the application', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    logger.info("Navigated to file upload page");
    logger.error("This is a sample error log");
    logger.warn("This is a sample warning log");
    logger.debug("This is a sample debug log");
    logger.silly("This is a sample silly log");
    logger.silly("Preparing to upload file");

      const dropdownUtil = new DropdownUtil();
      dropdownUtil.selectDropdownOption(page.locator("//select[@id='dropdown']"), "option2");
   

    // upload the file
    await page.locator("//input[@id='file-upload']").setInputFiles("C://Users//Sandeep//Desktop//Repos//Batch3//sampleupload.txt");
    await page.locator("//input[@id='file-submit']").click();
    logger.info("File upload initiated");

    // assertion to verify file upload
    await expect(page.locator("//h3[text()='File Uploaded!']")).toHaveText("File Uploaded!");
    logger.info("File upload verified successfully");

});

// browser fixture to launch paytm appliation 
test('TC-02- Launch application using browser fixture', async ({ browser }) => {

   logger.info("Launching Paytm application using browser fixture");
    const context= await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://paytm.com/');
    logger.info("Navigated to Paytm homepage");
    await page.waitForTimeout(5000);
    
});



test('TC-03- Launch application using browser fixture', async ({ page }) => {




    await page.goto('https://paytm.com/');
    logger.info("Navigated to Paytm homepage");
    await page.locator("//li[text()='Recharge & Bills']").hover();
    await page.screenshot({path:'error.png'});
    await page.waitForTimeout(5000);
    await page.locator("//li[text()='Recharge & Bills']/../li//a[text()='Mobile Recharge']").click();
     await page.waitForTimeout(5000);
    logger.info("Navigated to Mobile Recharge page");
    await page.locator("//button[text()='Proceed to Recharge']").click();
    await page.waitForTimeout(5000);
    logger.info("Proceeded to Recharge without entering any details");
  

    
});

// navigation methods - goBack, goForward, reload

test('TC-04 - Navigation methods - saucedemo application',async ({page})=>{
    await page.goto(process.env.BASE_URL);
    await page.goBack();
    await page.waitForTimeout(5000);
    await page.goForward();
    await page.waitForTimeout(5000);
    await page.reload();
    await page.waitForTimeout(5000);
})


test('TC-05- Screenshot example', async ({ page }) => {

    await page.goto('https://paytm.com/');
    logger.info("Navigated to Paytm homepage");
    await page.locator("//li[text()='Recharge & Bills']").hover();
    await page.screenshot({path:'paytm.png'});
   

})


test('TC-06- Visual testing', async ({ page }) => {

    await page.goto('https://www.instagram.com/');
    await page.waitForTimeout(5000);
    logger.info("Navigated to Instagram Page");
    expect(await page.screenshot()).toMatchSnapshot("expectedinstagram.png");
    // perfrom some steps 

    expect(await page.screenshot()).toMatchSnapshot("expect1.png");

   
   

})


test('TC-07- Visual testing example 2',async ({page})=>{
    await page.goto(process.env.BASE_URL);
   logger.info("Naviagated to saucedemo application");
    expect (await page.screenshot()).toMatchSnapshot("expectedsaucedemo.png");
      await  page.locator(" ").fill(process.env.user_Name);
    logger.info('Entered username');
  await page.locator("//input[@data-test='password']").fill(process.env.PASSWORD);
   logger.info('Entered password');
  await page.locator("//input[@id='login-button']").click();
    logger.info('Clicked on login button');
    await page.waitForTimeout(5000);
    await page.pause();
    expect (await page.screenshot()).toMatchSnapshot("expectedsaucedemoinventory.png");

})
