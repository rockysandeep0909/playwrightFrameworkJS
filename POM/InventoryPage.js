class InventoryPage{

//locators  - Region 1
// methods / functions

constructor(page){
    this.page=page;
    this.inventoryContainer= page.locator('//div[@id="inventory_container"]');
    this.productItems= page.locator('//div[@class="inventory_item"]');
    this.cartBadge= page.locator('//a[@class="shopping_cart_link"]');
    this.myproduct=page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]');
}



     async clickMyproduct(){
        await this.myproduct.click();
  
    }

    async clickCartBadge(){
        await this.cartBadge.click();   
    }


}
 
module.exports={InventoryPage};