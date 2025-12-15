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