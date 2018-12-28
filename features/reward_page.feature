Feature: A user should be able to check the reward app

  Scenario: The leaderboard should be displayed in the reward page
    Given a client is in the reward page
    And the title "Leaderboard" should be displayed
    And I log out
  
  @WIP
  Scenario: The user should be able to get a reward in the reward page
    Given a client is in the reward page
    When the option "Rewards" is selected
    Then the slack logo should be displayed
    And I log out

  Scenario: The user should be able to click in the about option to see all the information.
    Given a client is in the reward page
    When the option "About" is selected
    Then the title "Thank You" should be displayed
    And I log out