// utility to interact with buttons , text box

const { expect } = require('@playwright/test');

class InteractionUtil { 
    // method to click on element
    async clickElement(elementLocator) {
        await elementLocator.click();
    }
    // method to enter text in text box
    async enterText(elementLocator, text) {
        await elementLocator.fill(text);
    }
    // method to verify element is visible
    async verifyElementVisible(elementLocator) {
        await expect(elementLocator).toBeVisible();
    }
}

module.exports = InteractionUtil;