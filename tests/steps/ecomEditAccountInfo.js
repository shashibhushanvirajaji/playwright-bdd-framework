
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture.js';

const { Given, When, Then } = createBdd(test);

Then('the user navigates to Account Information page', async ({ ecomEditAccountPage }) => {
    // Step: And the user navigates to Account Information page
    // From: tests/features/ecomEditAccInfo.feature:13:9
    await ecomEditAccountPage.navigateToAccountInfo();
});

When('the user updates the first name to {string}', async ({ ecomEditAccountPage }, firstname) => {
    // Step: When the user updates the first name to "ShashiUpdated"
    // From: tests/features/ecomEditAccInfo.feature:14:9
    await ecomEditAccountPage.updateFirstName(firstname);
});

When('the user updates the last name to {string}', async ({ ecomEditAccountPage }, lastname) => {
    // Step: And the user updates the last name to "VirajajiUpdated"
    // From: tests/features/ecomEditAccInfo.feature:15:9
    await ecomEditAccountPage.updateLastName(lastname);
});

When('the user clicks on continue button to save changes', async ({ ecomEditAccountPage }) => {
    // Step: And the user clicks on continue button to save changes
    // From: tests/features/ecomEditAccInfo.feature:16:9
    await ecomEditAccountPage.clickContinue();
});

Then('the user should see a success message indicating the account information has been updated successfully.', async ({ ecomEditAccountPage}) => {
    // Step: Then the user should see a success message indicating the account information has been updated successfully.
    // From: tests/features/ecomEditAccInfo.feature:17:9
    await ecomEditAccountPage.verifySuccessMessage();
});