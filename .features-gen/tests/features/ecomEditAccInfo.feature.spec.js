// Generated from: tests/features/ecomEditAccInfo.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Verify E-commerce Account Information Edit Functionality', () => {

  test('Successful Login with Valid Credentials', { tag: ['@updateAccountInfo'] }, async ({ Given, When, Then, And, ecomEditAccountPage, ecomLoginPage }) => { 
    await Given('the user is on the e-commerce login page \'https://ecommerce-playground.lambdatest.io/\'', null, { ecomLoginPage }); 
    await When('the user clicks on My Account link', null, { ecomLoginPage }); 
    await And('the user enters a valid email address "shashi.virajaji@gmail.com"', null, { ecomLoginPage }); 
    await And('the user enters a valid password "Sbhushan@123"', null, { ecomLoginPage }); 
    await And('the user clicks the login button', null, { ecomLoginPage }); 
    await Then('the user should be redirected to the homepage', null, { ecomLoginPage }); 
    await And('the user navigates to Account Information page', null, { ecomEditAccountPage }); 
    await When('the user updates the first name to "ShashiUpdated"', null, { ecomEditAccountPage }); 
    await And('the user updates the last name to "VirajajiUpdated"', null, { ecomEditAccountPage }); 
    await And('the user clicks on continue button to save changes', null, { ecomEditAccountPage }); 
    await Then('the user should see a success message indicating the account information has been updated successfully.', null, { ecomEditAccountPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/ecomEditAccInfo.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":["@updateAccountInfo"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given the user is on the e-commerce login page 'https://ecommerce-playground.lambdatest.io/'","stepMatchArguments":[{"group":{"start":41,"value":"'https://ecommerce-playground.lambdatest.io/'","children":[{"children":[{"children":[]}]},{"start":42,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When the user clicks on My Account link","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And the user enters a valid email address \"shashi.virajaji@gmail.com\"","stepMatchArguments":[{"group":{"start":38,"value":"\"shashi.virajaji@gmail.com\"","children":[{"start":39,"value":"shashi.virajaji@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And the user enters a valid password \"Sbhushan@123\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Sbhushan@123\"","children":[{"start":34,"value":"Sbhushan@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And the user clicks the login button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the homepage","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And the user navigates to Account Information page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When the user updates the first name to \"ShashiUpdated\"","stepMatchArguments":[{"group":{"start":35,"value":"\"ShashiUpdated\"","children":[{"start":36,"value":"ShashiUpdated","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And the user updates the last name to \"VirajajiUpdated\"","stepMatchArguments":[{"group":{"start":34,"value":"\"VirajajiUpdated\"","children":[{"start":35,"value":"VirajajiUpdated","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And the user clicks on continue button to save changes","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then the user should see a success message indicating the account information has been updated successfully.","stepMatchArguments":[]}]},
]; // bdd-data-end