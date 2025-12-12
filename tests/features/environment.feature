
Feature: Verify E-commerce Login Functionality with different environments


    Feature Description :
    This feature tests the login functionality of an e-commerce website using valid credentials.
   
    Scenario: Successful Login with Valid Credentials
        Given the user navigates to the e-commerce login page
        When the user clicks on My Account link
        And the user enters a valid email address and password from environment variables
        And the user clicks the login button
        Then the user should be redirected to the homepage