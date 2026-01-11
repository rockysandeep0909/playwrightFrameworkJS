// checkbox demo
// unchecked
// check the checkbox
// checked



const {test,expect}=require('@playwright/test')

test('checkbox handling and iframe handling', async({page})=>{

   await  page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_checkbox');

  // Wait for iframe to be loaded
  await page.waitForTimeout(3000);
  
  // Get the iframe element
  const iframeElement = page.frameLocator("//iframe[@id='iframeResult']");

  let statusbefore=await iframeElement.locator("//input[@value='Bike']").isChecked();
  console.log("before clicking"+statusbefore);
  expect(await iframeElement.locator("//input[@value='Bike']").isChecked()).toBeFalsy();


 
  
  // Check the Bike checkbox inside iframe
  await iframeElement.locator("//input[@value='Bike']").click();
    let statusafter=await iframeElement.locator("//input[@value='Bike']").isChecked();
  console.log("after clicking"+statusafter);

  expect(await iframeElement.locator("//input[@value='Bike']").isChecked()).toBeTruthy();


})

