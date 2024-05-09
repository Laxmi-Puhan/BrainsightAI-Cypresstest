Feature: End to End Testing

    Sign up with Exist User with all valid inputs and validate failed sign up

    Scenario: Sign up with exist user
    Given website given to Sign up
    When Enter exist user inputs and check the checkboxes
    Then Verify the signup button is enabled and click the signup button
    Then veirfy the sign up is failed