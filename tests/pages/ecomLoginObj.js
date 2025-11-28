import { expect } from "playwright/test";

export class EcomLoginPage {
    constructor(page) {
        this.page = page;
        this.myaccountLink = page.getByRole('button', { name: 'My account' })
        this.emailInput = page.getByLabel('E-Mail Address')
        this.passwordInput = page.getByLabel('Password')
        this.loginButton = page.locator('input:has-text("Login")')
       
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
    async verifyUserIsOnHomepage(loggedInURL) {
       expect(this.page).toHaveURL(loggedInURL);
    }

    async verifyUserIsNotOnHomepage(loginURL) {
       expect(this.page).toHaveURL(loginURL);
    }   
}

