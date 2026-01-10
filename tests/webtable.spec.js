const {test}=require('@playwright/test');


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
