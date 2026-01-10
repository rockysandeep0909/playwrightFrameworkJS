/**
 * Utility class for handling multiple tabs/pages in Playwright
 */

class TabUtil {
    /**
     * Open a new tab/page in the same browser context
     * @param {Browser} browser - Playwright browser instance
     * @param {BrowserContext} context - Playwright browser context
     * @returns {Page} New page/tab instance
     */
    async openNewTab(browser, context) {
        const newPage = await context.newPage();
        return newPage;
    }

    /**
     * Open a new tab and navigate to a URL
     * @param {Browser} browser - Playwright browser instance
     * @param {BrowserContext} context - Playwright browser context
     * @param {String} url - URL to navigate to
     * @returns {Page} New page/tab instance
     */
    async openNewTabWithURL(browser, context, url) {
        const newPage = await context.newPage();
        await newPage.goto(url);
        return newPage;
    }

    /**
     * Switch to a specific tab by page object
     * @param {Page} page - Page/tab to switch to
     * @returns {Page} The switched page
     */
    async switchToTab(page) {
        return page;
    }

    /**
     * Get all pages/tabs in a context
     * @param {BrowserContext} context - Playwright browser context
     * @returns {Array<Page>} Array of all pages in the context
     */
    async getAllTabs(context) {
        return context.pages();
    }

    /**
     * Get the count of open tabs
     * @param {BrowserContext} context - Playwright browser context
     * @returns {Number} Count of open tabs/pages
     */
    async getTabCount(context) {
        return context.pages().length;
    }

    /**
     * Close a specific tab/page
     * @param {Page} page - Page/tab to close
     */
    async closeTab(page) {
        await page.close();
    }

    /**
     * Close all tabs except the first one
     * @param {BrowserContext} context - Playwright browser context
     */
    async closeAllTabsExceptFirst(context) {
        const pages = context.pages();
        for (let i = 1; i < pages.length; i++) {
            await pages[i].close();
        }
    }

    /**
     * Switch to tab by index
     * @param {BrowserContext} context - Playwright browser context
     * @param {Number} tabIndex - Index of the tab to switch to (0-based)
     * @returns {Page} The page at the specified index
     */
    async switchToTabByIndex(context, tabIndex) {
        const pages = context.pages();
        if (tabIndex < 0 || tabIndex >= pages.length) {
            throw new Error(`Invalid tab index: ${tabIndex}. Total tabs: ${pages.length}`);
        }
        return pages[tabIndex];
    }

    /**
     * Switch to tab by title
     * @param {BrowserContext} context - Playwright browser context
     * @param {String} tabTitle - Title of the tab to switch to
     * @returns {Page} The page with matching title
     */
    async switchToTabByTitle(context, tabTitle) {
        const pages = context.pages();
        for (const page of pages) {
            const title = await page.title();
            if (title.includes(tabTitle)) {
                return page;
            }
        }
        throw new Error(`Tab with title "${tabTitle}" not found`);
    }

    /**
     * Switch to tab by URL
     * @param {BrowserContext} context - Playwright browser context
     * @param {String} urlPart - Part of URL to match
     * @returns {Page} The page with matching URL
     */
    async switchToTabByURL(context, urlPart) {
        const pages = context.pages();
        for (const page of pages) {
            const url = page.url();
            if (url.includes(urlPart)) {
                return page;
            }
        }
        throw new Error(`Tab with URL containing "${urlPart}" not found`);
    }

    /**
     * Handle popup window
     * @param {Page} parentPage - Parent page that triggers the popup
     * @param {Function} triggerFunction - Function that triggers the popup
     * @returns {Page} The popup page
     */
    async handlePopup(parentPage, triggerFunction) {
        const [popup] = await Promise.all([
            parentPage.context().waitForEvent('page'),
            triggerFunction()
        ]);
        await popup.waitForLoadState();
        return popup;
    }

    /**
     * Wait for new page/tab and get it
     * @param {BrowserContext} context - Playwright browser context
     * @returns {Page} The newly opened page
     */
    async waitForNewPage(context) {
        return new Promise((resolve) => {
            context.once('page', (page) => {
                page.waitForLoadState().then(() => resolve(page));
            });
        });
    }

    /**
     * Get page title
     * @param {Page} page - Page to get title from
     * @returns {String} Page title
     */
    async getPageTitle(page) {
        return await page.title();
    }

    /**
     * Get page URL
     * @param {Page} page - Page to get URL from
     * @returns {String} Page URL
     */
    async getPageURL(page) {
        return page.url();
    }

    /**
     * Switch and verify tab content
     * @param {BrowserContext} context - Playwright browser context
     * @param {Number} tabIndex - Index of the tab
     * @param {String} expectedContent - Expected content to verify
     * @returns {Boolean} True if content found
     */
    async switchAndVerifyTab(context, tabIndex, expectedContent) {
        const page = await this.switchToTabByIndex(context, tabIndex);
        const content = await page.content();
        return content.includes(expectedContent);
    }
}

module.exports = TabUtil;
