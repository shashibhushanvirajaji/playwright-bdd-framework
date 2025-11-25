
class EcomLoginPage {
    constructor(page) {
        this.page = page;
        this.myaccountLink = page.locator('#myAccount');
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#loginBtn');
       
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async clickMyAccount() {
        await this.myaccountLink.click();
    }

    async enterEmail(email) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }
}

export { EcomLoginPage };