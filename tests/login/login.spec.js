const {test}=require('playwright/test');
import userData from '../../test-data/userData.json'

test('Login using json test data file', async ({page})=>{
    await page.goto("https://www.saucedemo.com/");

    await page.locator("[data-test='username']").fill(userData.validUser.username);
    await page.locator("[data-test='password']").fill(userData.validUser.password);
    await page.locator("[data-test='login-button']").click();   
    await page.waitForTimeout(5000);

   
});


test('Login using json test data file using problem user', async ({page})=>{
    await page.goto("https://www.saucedemo.com/");

    await page.locator("[data-test='username']").fill(userData.problemUser.username);
    await page.locator("[data-test='password']").fill(userData.problemUser.password);
    await page.locator("[data-test='login-button']").click();   
    await page.waitForTimeout(5000);

   
});


