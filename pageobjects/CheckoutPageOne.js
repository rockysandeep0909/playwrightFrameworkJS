class CheckoutPageOne {
    constructor(page){
        this.page=page; 
        this.firstNameField= page.locator('//input[@data-test="firstName"]');
        this.lastNameField= page.locator('//input[@data-test="lastName"]');
        this.postalCodeField= page.locator('//input[@data-test="postalCode"]');
        this.continueButton= page.locator('//input[@data-test="continue"]');
    }
    async enterFirstName(firstName){
        await this.firstNameField.fill(firstName);
    }
    async enterLastName(lastName){
        await this.lastNameField.fill(lastName);
    }   
    async enterPostalCode(postalCode){
        await this.postalCodeField.fill(postalCode);
    }
    async clickContinue(){
        await this.continueButton.click();
    }       

}

module.exports={CheckoutPageOne};