const {test,expect}=require('@playwright/test');


test('Web Table Handling Test', async ({page})=>{
    await page.goto('https://demo.guru99.com/test/web-table-element.php#');

    // find the number of rows in the table
    const rows=await page.locator('//table[@class="dataTable"]//tbody//tr');
    const rowCount=await rows.count();
    console.log("Number of rows in the table: "+rowCount);

});



test('Web Table Handling Test for w3schools', async ({page})=>{
    await page.goto('https://www.w3schools.com/html/html_tables.asp');

    // find the number of rows in the table
    const rows=await page.locator('//table[@id="customers"]/tbody/tr');
    const rowCount=await rows.count();
    console.log("Number of rows in the table: "+rowCount);

    for(let i=2;i<=rowCount;i++){
    let countryName=await page.locator("//table[@id='customers']/tbody/tr["+i+"]/td[3]").textContent();
     console.log("Country Name: "+ countryName);
    }

});


test("checkbox demo and iframe demo", async ({page})=>{

    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_checkbox");
// handle the iframe

    let newframe=await page.frameLocator("//iframe[@id='iframeResult']");
    let statusbefore=await newframe.locator("//input[@value='Bike']").isChecked(); //false
    console.log("status of checkbox before clicking is "+ statusbefore);
    expect(await newframe.locator("//input[@value='Bike']").isChecked()).toBeFalsy();

    await newframe.locator("//input[@value='Bike']").click();
    await newframe.locator("//input[@value='Car']").click();
    let statusafter=await newframe.locator("//input[@value='Bike']").isChecked();
    console.log("status of checkbox after clicking is "+ statusafter)
    expect(await newframe.locator("//input[@value='Bike']").isChecked()).toBeTruthy();

})


test("browser fixutre example using paytm", async ({browser})=>{
  const context=await browser.newContext();
  const page=await context.newPage();
  await page.goto("https://paytm.com/");
  await page.waitForTimeout(5000);
  await page.locator("//li[text()='Recharge & Bills']").hover();

  const mobileRechargeLink=await page.locator("//li[text()='Recharge & Bills']/..//a[text()='Mobile Recharge']");
  mobileRechargeLink.click();
   await page.locator("//label[text()='Postpaid']").click();


})


test("javascript alerts handling using playwright", async ({page})=>{
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

//   await  page.locator("//button[text()='Click for JS Alert']").click();
//   await page.on('dialog',dialog=>dialog.accept());

  await  page.locator("//button[text()='Click for JS Confirm']").click();
  await page.on('dialog',dialog=>dialog.accept());


 await  page.locator("//button[text()='Click for JS Confirm']").click();
  await page.on('dialog',dialog=>dialog.dismiss());

  await page.pause();

});


// test to handle http authentication in playwright
test('TC-26 - Handling http authentication in playwright',async ({page})=>{

  await page.goto("https://the-internet.herokuapp.com/basic_auth"); 
  await page.waitForTimeout(5000);   
  await page.locator("")
});