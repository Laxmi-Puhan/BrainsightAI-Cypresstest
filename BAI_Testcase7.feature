Feature: End to End Testing

    Verify all link in Signup page are clickable and working fine

    Scenario: Links present in checkbox-1 line are all clicksable and working
    Given website given to Sign up
    Then user click all links EULA, NDA, DPA, privacy policy, Terms of Use ony by one and all should open
    