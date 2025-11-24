
import { createBdd } from 'playwright-bdd';
import { expect } from 'playwright/test';
const { Given, When, Then } = createBdd();

Given('the user is on the e-commerce login page {string}', async ({page}, url) => {
  // Step: Given the user is on the e-commerce login page 'https://ecommerce-playground.lambdatest.io/'
  // From: ecommercelogin.feature:7:9
  await page.goto(url);
});

When('the user clicks on My Account link', async ({page}) => {
  // Step: When the user clicks on My Account link
  // From: ecommercelogin.feature:8:9
  await page.getByRole('button', { name: 'My account' }).click();
});

When('the user enters a valid email address {string}', async ({page}, email_address) => {
  // Step: And the user enters a valid email address "shashi.virajaji@gmail.com"
  // From: ecommercelogin.feature:9:9
    await page.getByLabel('E-Mail Address').fill(email_address);
});

When('the user enters a valid password {string}', async ({page}, password) => {
  // Step: And the user enters a valid password "Sbhushan@123"
  // From: ecommercelogin.feature:10:9
  await page.getByLabel('Password').fill(password);
});

When('the user clicks the login button', async ({page}) => {
  // Step: And the user clicks the login button
  // From: ecommercelogin.feature:11:9
    await page.locator('input:has-text("Login")').click();
});

Then('the user should be redirected to the homepage', async ({page}) => {
  // Step: Then the user should be redirected to the homepage
  // From: ecommercelogin.feature:12:9
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
});

Then('the user should not be redirected to the homepage', async ({page}) => {
  // Step: Then the user should not be redirected to the homepage
  // From: ecommercelogin.feature:20:9

  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

});
