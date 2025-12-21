const {test}=require('@playwright/test');
const {LoginPage}=require('../pageobjects/LoginPage');
const {InventoryPage}=require('../pageobjects/InventoryPage');
import 'dotenv/config';
const logger = require('../utils/logger');

test("TC-01 - E2E test using page object model",async ({page})=>{  
    const loginPage=new LoginPage(page);
    const inventoryPage=new InventoryPage(page);

    await loginPage.goTO();
    logger.info("Navigated to saucedemo application");
    await loginPage.enterusername(process.env.user_Name);
    logger.info("Entered username");
    await loginPage.enterpassword( process.env.PASSWORD);
    logger.info("Entered password");
    await loginPage.clickLogin();
    logger.info("Clicked on login button");


    await inventoryPage.clickMyproduct();
    logger.info("Clicked on add to cart button for product");

});