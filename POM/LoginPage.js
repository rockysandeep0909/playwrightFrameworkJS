class LoginPage{

//locators  - Region 1
// methods / functions

//Region 1
constructor(page){
   this.page=page;
   this.username= page.locator("//input[@data-test='username']");
   this.password=page.locator("//input[@data-test='password']");
   this.loginButton= page.locator("//input[@id='login-button']");
}



//Region 2
    async goToLoginPage(){
    await this.page.goto("https://www.saucedemo.com/");
}

    async validLogin(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
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


}

module.exports={LoginPage};