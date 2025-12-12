// Generated from: tests/features/ecommercelogin.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Verify E-commerce Login Functionality', () => {

  test('Successful Login with Valid Credentials', async ({ Given, When, Then, And, ecomLoginPage }) => { 
    await Given('the user is on the e-commerce login page \'https://ecommerce-playground.lambdatest.io/\'', null, { ecomLoginPage }); 
    await When('the user clicks on My Account link', null, { ecomLoginPage }); 
    await And('the user enters a valid email address "shashi.virajaji@gmail.com"', null, { ecomLoginPage }); 
    await And('the user enters a valid password "Sbhushan@123"', null, { ecomLoginPage }); 
    await And('the user clicks the login button', null, { ecomLoginPage }); 
    await Then('the user should be redirected to the homepage', null, { ecomLoginPage }); 
  });

  test.describe('UnSuccessful Login with In-Valid Credentials', () => {

    test('Example #1', async ({ Given, When, Then, And, ecomLoginPage }) => { 
      await Given('the user is on the e-commerce login page \'https://ecommerce-playground.lambdatest.io/\'', null, { ecomLoginPage }); 
      await When('the user clicks on My Account link', null, { ecomLoginPage }); 
      await And('the user enters a valid email address "abc@gmail.com"', null, { ecomLoginPage }); 
      await And('the user enters a valid password "wrongpassword"', null, { ecomLoginPage }); 
      await And('the user clicks the login button', null, { ecomLoginPage }); 
      await Then('the user should not be redirected to the homepage', null, { ecomLoginPage }); 
    });

    test('Example #2', async ({ Given, When, Then, And, ecomLoginPage }) => { 
      await Given('the user is on the e-commerce login page \'https://ecommerce-playground.lambdatest.io/\'', null, { ecomLoginPage }); 
      await When('the user clicks on My Account link', null, { ecomLoginPage }); 
      await And('the user enters a valid email address "ruthvika@yahoo.com"', null, { ecomLoginPage }); 
      await And('the user enters a valid password "bnreddy@12"', null, { ecomLoginPage }); 
      await And('the user clicks the login button', null, { ecomLoginPage }); 
      await Then('the user should not be redirected to the homepage', null, { ecomLoginPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/ecommercelogin.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given the user is on the e-commerce login page 'https://ecommerce-playground.lambdatest.io/'","stepMatchArguments":[{"group":{"start":41,"value":"'https://ecommerce-playground.lambdatest.io/'","children":[{"children":[{"children":[]}]},{"start":42,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When the user clicks on My Account link","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And the user enters a valid email address \"shashi.virajaji@gmail.com\"","stepMatchArguments":[{"group":{"start":38,"value":"\"shashi.virajaji@gmail.com\"","children":[{"start":39,"value":"shashi.virajaji@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And the user enters a valid password \"Sbhushan@123\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Sbhushan@123\"","children":[{"start":34,"value":"Sbhushan@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And the user clicks the login button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the homepage","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given the user is on the e-commerce login page 'https://ecommerce-playground.lambdatest.io/'","stepMatchArguments":[{"group":{"start":41,"value":"'https://ecommerce-playground.lambdatest.io/'","children":[{"children":[{"children":[]}]},{"start":42,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When the user clicks on My Account link","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And the user enters a valid email address \"abc@gmail.com\"","stepMatchArguments":[{"group":{"start":38,"value":"\"abc@gmail.com\"","children":[{"start":39,"value":"abc@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And the user enters a valid password \"wrongpassword\"","stepMatchArguments":[{"group":{"start":33,"value":"\"wrongpassword\"","children":[{"start":34,"value":"wrongpassword","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And the user clicks the login button","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the user should not be redirected to the homepage","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given the user is on the e-commerce login page 'https://ecommerce-playground.lambdatest.io/'","stepMatchArguments":[{"group":{"start":41,"value":"'https://ecommerce-playground.lambdatest.io/'","children":[{"children":[{"children":[]}]},{"start":42,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When the user clicks on My Account link","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And the user enters a valid email address \"ruthvika@yahoo.com\"","stepMatchArguments":[{"group":{"start":38,"value":"\"ruthvika@yahoo.com\"","children":[{"start":39,"value":"ruthvika@yahoo.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And the user enters a valid password \"bnreddy@12\"","stepMatchArguments":[{"group":{"start":33,"value":"\"bnreddy@12\"","children":[{"start":34,"value":"bnreddy@12","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And the user clicks the login button","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the user should not be redirected to the homepage","stepMatchArguments":[]}]},
]; // bdd-data-end