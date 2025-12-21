class CartPage {
    constructor(page){
        this.page=page;
        this.cartItem= page.locator('.cart_item');
        this.checkoutButton= page.locator('#checkout');
    }
    async getCartItemCount(){
        return await this.cartItem.count();
    }

    async clickCheckout(){
        await this.checkoutButton.click();
    }
}

module.exports={CartPage};  