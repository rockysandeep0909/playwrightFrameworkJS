//const {test,expect}=require('@playwright/test')
import { test, expect } from '@playwright/test';
import 'dotenv/config';
import logger from '../utils/logger';


// Test case to login to saucedemo application
test('TC 01 - login to saucedemo applicaiton using valid username and password ',async ({page})=>{
  logger.info("=========================");
  logger.info("Executing TC 01 - login to saucedemo applicaiton using valid username and password");
  logger.info('Starting login test');
  await  page.goto(process.env.BASE_URL);
  logger.info('Navigated to login page');
  await page.getby.getByPlaceholder("Username").fill("standard_user");

}
);