const { expect } = require('@playwright/test');
const logger = require('../utils/logger');

class LoginPage{

//locators  - Region 1
// methods / functions

//Region 1
constructor(page){
   this.page=page;
   this.username= page.locator("#user-name");
   this.password=page.locator("//input[@data-test='password']");
   this.loginButton= page.locator("//input[@id='login-button']");
}



//Region 2
    async goToLoginPage(){
    await this.page.goto("https://www.saucedemo.com/");
}

    async validLoginUsingProblemUser(probusername,probpassword){    
        await this.username.fill(probusername);
        logger.info("Entered username");
        await this.password.fill(probpassword); 
        logger.info("Entered password");
        await this.loginButton.click();
        logger.info("Clicked on login button");
    }   

    async validLogin(username,password){
        await this.username.fill(username);
        logger.info("Entered username");
        await this.password.fill(password);
        logger.info("Entered password");
        await this.loginButton.click();
        logger.info("Clicked on login button");
    }
    
    async enterUsername(username){
        await this.username.fill(username);
    }
    async enterPassword(password){
        await this.password.fill(password);
    }   
    async clickLogin(){
        await this.loginButton.click();
    }
    
    async validateLoginButton(){
       await expect(this.loginButton).toBeVisible();
    }

}

module.exports={LoginPage};