import { test, expect } from '@playwright/test';


test('TC-01- Upload a file to the application', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.pause();

    // upload the file
    await page.locator("//input[@id='file-upload']").setInputFiles("C://Users//Sandeep//Desktop//Repos//Batch3//sampleupload.txt");
    await page.locator("//input[@id='file-submit']").click();

    // assertion to verify file upload
    await expect(page.locator("//h3[text()='File Uploaded!']")).toHaveText("File Uploaded!");

});

// browser fixture to launch paytm appliation 
test('TC-02- Launch application using browser fixture', async ({ browser }) => {

   
    const context= await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://paytm.com/');
    await page.waitForTimeout(5000);
    
});



test('TC-03- Launch application using browser fixture', async ({ page }) => {




    await page.goto('https://paytm.com/');
    await page.locator("//li[text()='Recharge & Bills']").hover();
    await page.waitForTimeout(5000);
    await page.locator("//li[text()='Recharge & Bills']/../li//a[text()='Mobile Recharge']").click();
     await page.waitForTimeout(5000);
    
    await page.locator("//button[text()='Proceed to Recharge']").click();
    await page.waitForTimeout(5000);

    
});

// navigation methods - goBack, goForward, reload

test('TC-04 - Navigation methods - saucedemo application',async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.goBack();
    await page.waitForTimeout(5000);
    await page.goForward();
    await page.waitForTimeout(5000);
    await page.reload();
    await page.waitForTimeout(5000);
})