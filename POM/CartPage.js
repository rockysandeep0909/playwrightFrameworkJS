class CartPage{

//Region 1
constructor(page){
   this.page=page;
    this.cartContainer= page.locator('//div[@class="cart_list"]');
    this.checkoutButton= page.locator('//button[@id="checkout"]');
    this.sortingoption= page.locator('//select[@class="product_sort_container"]');

}

//Region 2
    async clickCheckout(){
        await this.checkoutButton.click();
    }



}

module.exports={CartPage};