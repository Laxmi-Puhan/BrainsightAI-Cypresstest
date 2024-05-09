Feature: End to End Testing

    Sign up with New User with all valid inputs and validate success sign up

    Scenario: Sign up with new user
    Given website given to Sign up
    When Enter Valid inputs and check the checkboxes
    Then Verify the signup button is enabled and click the signup button
    Then veirfy the sign up is success