import 'dotenv/config';
class LoginPage {


    constructor(page){
        this.page=page;
        this.usernameField= page.locator('//input[@data-test="username"]');
        this.passwordField= page.locator('//input[@data-test="password"]');
        this.loginButton= page.locator('//input[@id="login-button"]');
    }

    async goTO(){
        await this.page.goto(process.env.BASE_URL);
    }

    async validLogin(username,password){
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click(); 
    }

    async enterusername(username){
        await this.usernameField.fill(username);
    }
    async enterpassword(password){
        await this.passwordField.fill(password);
    }
    async clickLogin(){
        await this.loginButton.click();
    }


}

module.exports={LoginPage};