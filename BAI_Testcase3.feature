Feature: End to End Testing

    Verify password is not acceptable if the length is less than 8 with char alpha numeric with at least 1 special character and verify the signup button is disabled

    Scenario: Verify password is not acceptable if the criteria is not fulfilled 
    Given website given to Sign up
    When user entered password less than 8 length
    Then Verify password is not accepted and still sign up button is disabled
    