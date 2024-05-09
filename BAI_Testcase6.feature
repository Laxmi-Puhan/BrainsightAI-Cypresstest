Feature: End to End Testing

    Verify Signup is not allowed when confirm password not matched with given password

    Scenario: Signup is not allowed when confirm password not matched with given password
    Given website given to Sign up
    When user entered valid password in confirm password field that does not match wuth password field 
    Then Verify confirm password field highlighted with red and still sign up button is disabled
    