// Generated from: tests/features/environment.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Verify E-commerce Login Functionality with different environments', () => {

  test('Successful Login with Valid Credentials', async ({ Given, When, Then, And, ecomLoginPage }) => { 
    await Given('the user navigates to the e-commerce login page', null, { ecomLoginPage }); 
    await When('the user clicks on My Account link', null, { ecomLoginPage }); 
    await And('the user enters a valid email address and password from environment variables', null, { ecomLoginPage }); 
    await And('the user clicks the login button', null, { ecomLoginPage }); 
    await Then('the user should be redirected to the homepage', null, { ecomLoginPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/environment.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given the user navigates to the e-commerce login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When the user clicks on My Account link","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And the user enters a valid email address and password from environment variables","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And the user clicks the login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the homepage","stepMatchArguments":[]}]},
]; // bdd-data-end