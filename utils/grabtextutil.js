// create utility for getting text from locator
class GrabTextUtil {
    /**
     * Grabs text content from all elements matching the provided locator.
     * @param {Locator} locator - The Playwright locator for the elements.
     * @returns {Promise<string[]>} - An array of text contents from the matched elements.
     */
    async grabTextFromLocator(locator) {
        const texts = [];
        const count = await locator.count(); 
        for (let i = 0; i < count; i++) {
            const text = await locator.nth(i).textContent();
            texts.push(text.trim());
        }
        return texts;
    }   
}

module.exports = GrabTextUtil;