const {test}=require('@playwright/test');


test('Web Table Handling Test', async ({page})=>{
    await page.goto('https://demo.guru99.com/test/web-table-element.php#');

    // find the number of rows in the table
    const rows=await page.locator('//table[@class="dataTable"]//tbody//tr');
    const rowCount=await rows.count();
    console.log("Number of rows in the table: "+rowCount);

});




