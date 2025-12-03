@only
Feature: Verify E-commerce Account Information Edit Functionality


    Feature Description :
    This feature tests the login functionality of an e-commerce website using valid credentials.

    @only
    Scenario: Successful Login with Valid Credentials
         Given the user is on the e-commerce login page 'https://ecommerce-playground.lambdatest.io/'
         When the user clicks on My Account link
        # And the user enters a valid email address "shashi.virajaji@gmail.com"
        # And the user enters a valid password "Sbhushan@123"
        # And the user clicks the login button
        Then the user should be redirected to the homepage
        And the user navigates to Account Information page
        When the user updates the first name to "ShashiUpdated"
        And the user updates the last name to "VirajajiUpdated"
        And the user clicks on continue button to save changes
        Then the user should see a success message indicating the account information has been updated successfully.