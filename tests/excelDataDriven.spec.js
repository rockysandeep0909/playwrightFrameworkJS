const { test, expect } = require('@playwright/test');
const ExcelUtil = require('../utils/excelutil');
const path = require('path');

// Read Excel data at module level (before test collection)
const excelFilePath = path.join(__dirname, '../test-data/testdata.xlsx');
const testData = ExcelUtil.readExcelData(excelFilePath, 'LoginCredentials');
console.log('Test data loaded from Excel:', testData);

test.describe('Excel Data Driven Login Tests', () => {
  // Run test for each row in Excel
  testData?.forEach((userData, index) => {
    test(`Login Test ${index + 1} - User: ${userData.username}`, async ({ page }) => {
      // Navigate to SauceDemo website
      await page.goto('https://www.saucedemo.com/');

      // Verify page loaded
      //const loginContainer = page.locator('[class*="login"]');
      //await expect(loginContainer).toBeVisible({ timeout: 5000 });

      // Fill username from Excel data
      await page.fill('[data-test="username"]', userData.username);

      // Fill password from Excel data
      await page.fill('[data-test="password"]', userData.password);

      // Click login button
      await page.click('[data-test="login-button"]');

      // Verify result based on expected outcome from Excel
      if (userData.expectedResult === 'success') {
        // Wait for dashboard to load
        await expect(page.locator('.inventory_list')).toBeVisible({ timeout: 5000 });
        console.log(`✓ Login successful for user: ${userData.username}`);
      } else if (userData.expectedResult === 'locked') {
        // Expect error message for locked user
        const errorMessage = page.locator('[data-test="error"]');
        await expect(errorMessage).toContainText('locked out');
        console.log(`✓ User locked out as expected: ${userData.username}`);
      }
    });
  });

  test('Read and display all Excel sheets', async () => {
    const excelFilePath = path.join(__dirname, '../test-data/testdata.xlsx');

    // Get all sheet names
    const sheetNames = ExcelUtil.getSheetNames(excelFilePath);
    console.log('Available sheets:', sheetNames);

    // Read data from Users sheet
    const usersData = ExcelUtil.readExcelData(excelFilePath, 'Users');
    console.log('Users data from Excel:');
    console.table(usersData);

    expect(usersData.length).toBeGreaterThan(0);
  });
});
