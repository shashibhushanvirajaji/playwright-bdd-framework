
import { createBdd } from 'playwright-bdd';

import { test } from '../fixtures/fixture.js';


const { Given, When, Then } = createBdd(test);
Given('the user is on the e-commerce login page {string}', async ({ ecomLoginPage }, url) => {
  // Step: Given the user is on the e-commerce login page 'https://ecommerce-playground.lambdatest.io/'
  // From: ecommercelogin.feature:7:9

  await ecomLoginPage.navigate(url);
});

When('the user clicks on My Account link', async ({ ecomLoginPage }) => {
  // Step: When the user clicks on My Account link
  // From: ecommercelogin.feature:8:9
  await ecomLoginPage.clickMyAccount();
});

When('the user enters a valid email address {string}', async ({ ecomLoginPage }, email_address) => {
  // Step: And the user enters a valid email address "shashi.virajaji@gmail.com"
  // From: ecommercelogin.feature:9:9
  await ecomLoginPage.enterEmail(email_address);
});

When('the user enters a valid password {string}', async ({ ecomLoginPage }, password) => {
  // Step: And the user enters a valid password "Sbhushan@123"
  // From: ecommercelogin.feature:10:9
  await ecomLoginPage.enterPassword(password);

});

When('the user clicks the login button', async ({ ecomLoginPage }) => {
  // Step: And the user clicks the login button
  // From: ecommercelogin.feature:11:9
  await ecomLoginPage.clickLogin();
});

Then('the user should be redirected to the homepage', async ({ ecomLoginPage }) => {
  // Step: Then the user should be redirected to the homepage
  // From: ecommercelogin.feature:12:9
  //  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
  await ecomLoginPage.verifyUserIsOnHomepage('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
});

Then('the user should not be redirected to the homepage', async ({ ecomLoginPage }) => {
  // Step: Then the user should not be redirected to the homepage
  // From: ecommercelogin.feature:20:9
  //
  //await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  await ecomLoginPage.verifyUserIsNotOnHomepage('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
});
