import { expect } from "playwright/test";

export class EcomAccountInfoPage {
    constructor(page) {
        this.page = page;
        this.accountInfoLink = page.getByRole('link', { name: 'Edit your account information' });
        this.firstNameInput = page.getByLabel('First Name');
        this.lastNameInput = page.getByLabel('Last Name');
        this.continueButton = page.locator('input:has-text("Continue")');
        this.successMessage = page.getByText('Success: Your account has been successfully updated.');
    }

    async navigateToAccountInfo() {
        await this.accountInfoLink.click();
    }

    async updateFirstName(firstName) {
        await this.firstNameInput.fill(firstName);
    }

    async updateLastName(lastName) {
        await this.lastNameInput.fill(lastName);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async verifySuccessMessage() {
        await expect(this.successMessage).toBeVisible();
        await expect(this.successMessage).toContainText('Success: Your account has been successfully updated.');
    }
}