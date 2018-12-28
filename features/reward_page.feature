Feature: A user should be able to check the reward app

  Scenario: A user should be able to read the title "Leaderboard" on page
    Given a client is in the reward page
    And the title "Leaderboard" should be displayed
    And I log out