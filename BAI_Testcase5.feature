Feature: End to End Testing

    Verify password is not acceptable if the length is ok with char,special character but without numeric and verify the signup button is disabled

    Scenario: Verify password is not acceptable if the criteria is not fulfilled 
    Given website given to Sign up
    When user entered password without any numeric value
    Then Verify password is not accepted and still sign up button is disabled
    