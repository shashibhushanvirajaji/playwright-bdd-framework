
import { createBdd } from 'playwright-bdd';

import { test } from '../fixtures/fixture.js';


const { Given, When } = createBdd(test);


Given('the user navigates to the e-commerce login page', async ({ecomLoginPage}) => {
  // Step: Given the user navigates to the e-commerce login page
  // From: tests/features/environment.feature:7:9
await ecomLoginPage.navigate(process.env.URL);
});

When('the user enters a valid email address and password from environment variables', async ({ecomLoginPage}) => {
  // Step: And the user enters a valid email address and password from environment variables
  // From: tests/features/environment.feature:9:9
await ecomLoginPage.enterEmail(process.env.EMAIL);
await ecomLoginPage.enterPassword(process.env.PASSWORD);
});