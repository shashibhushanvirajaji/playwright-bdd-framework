@skip
Feature: Verify E-commerce Login Functionality


    Feature Description :
    This feature tests the login functionality of an e-commerce website using valid credentials.
    Scenario: Successful Login with Valid Credentials
        Given the user is on the e-commerce login page 'https://ecommerce-playground.lambdatest.io/'
        When the user clicks on My Account link
        And the user enters a valid email address "shashi.virajaji@gmail.com"
        And the user enters a valid password "Sbhushan@123"
        And the user clicks the login button
        Then the user should be redirected to the homepage


    Scenario Outline: UnSuccessful Login with In-Valid Credentials
        Given the user is on the e-commerce login page 'https://ecommerce-playground.lambdatest.io/'
        When the user clicks on My Account link
        And the user enters a valid email address "<emailaddress>"
        And the user enters a valid password "<password>"
        And the user clicks the login button
        Then the user should not be redirected to the homepage
        Examples:
            | emailaddress       | password      |
            | abc@gmail.com      | wrongpassword |
            | ruthvika@yahoo.com | bnreddy@12    |

