class InventoryPage {
   

    constructor(page) {
        this.page = page;
        this.inventoryContainer = page.locator('//div[@id="inventory_container"]');
        this.productItems = page.locator('//div[@class="inventory_item"]');
        this.cartBadge = page.locator('//div[@class="shopping_cart_badge"]');
        this.myproduct=page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]');
    }   

    async isPageLoaded() {
        return await this.inventoryContainer.isVisible();
    }

    async getProductCount() {
        return await this.productItems.count();
    }   

    async clickMyproduct(){
        await this.myproduct.click();
    }
}


module.exports={InventoryPage};