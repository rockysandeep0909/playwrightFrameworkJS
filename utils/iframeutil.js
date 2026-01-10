class IFrameUtil {
  
  // Get frame by name
  async getFrameByName(page, frameName) {
    return page.frames().find(f => f.name() === frameName);
  }

  // Get frame by index
  async getFrameByIndex(page, index) {
    return page.frames()[index];
  }

  // Get frame by selector
  async getFrameBySelector(page, selector) {
    return page.frameLocator(selector);
  }

  // Fill input inside iframe
  async fillInputInFrame(page, frameSelector, inputSelector, text) {
    const frameLocator = page.frameLocator(frameSelector);
    await frameLocator.locator(inputSelector).fill(text);
  }

  // Click element inside iframe
  async clickElementInFrame(page, frameSelector, elementSelector) {
    const frameLocator = page.frameLocator(frameSelector);
    await frameLocator.locator(elementSelector).click();
  }

  // Get text from iframe element
  async getTextFromFrame(page, frameSelector, elementSelector) {
    const frameLocator = page.frameLocator(frameSelector);
    return await frameLocator.locator(elementSelector).textContent();
  }

  // Wait for element in iframe
  async waitForElementInFrame(page, frameSelector, elementSelector, timeout = 5000) {
    const frameLocator = page.frameLocator(frameSelector);
    await frameLocator.locator(elementSelector).waitFor({ timeout });
  }

  // Get all frames count
  async getAllFramesCount(page) {
    return page.frames().length;
  }

  // Interact with nested iframes
  async getNestedFrame(page, parentFrameSelector, childFrameSelector) {
    const parentFrame = page.frameLocator(parentFrameSelector);
    return parentFrame.frameLocator(childFrameSelector);
  }
}

module.exports = IFrameUtil;