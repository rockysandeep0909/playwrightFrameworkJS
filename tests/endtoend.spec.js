const {test}=require('@playwright/test');
const {LoginPage}=require('../POM/LoginPage');
const {InventoryPage}=require('../POM/InventoryPage');
const {CartPage}=require('../POM/CartPage');
const logger = require('../utils/logger');
import 'dotenv/config';


test('TC-01- Sample test to demonstrate class example in javascript', async ({page }) => {
let lp=new LoginPage(page)
let ip=new InventoryPage(page);
let cp=new CartPage(page);

await lp.goToLoginPage();
logger.info("Navigated to login page");

await lp.validateLoginButton();
await lp.validLogin(process.env.user_Name,process.env.PASSWORD);
logger.info("Performed login operation");
await ip.clickMyproduct();
logger.info("Clicked on product to view details");
await ip.clickCartBadge();
logger.info("Clicked on cart badge to view cart items");

});
