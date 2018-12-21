Feature: Using user commands in the app

    Scenario: A user should be able to use the command MY COOKIES in the app
       Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "RewardApp" channel
        Then I type the command "my cookies" and the message "You have" should be displayed
        And I log out 
    
    Scenario: A user should be able to use the command HELP in the app
      Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "reward_test" channel
        And I type the command "show leaderboard" and the message "===== Top 10 =====" should be displayed
        And I log out
    
    Scenario: A user should be able to use the command SHOW LEADERBOARD in the app
       Given a client is in Slack sign in page
        And I type "jwplayer" to access
        When I log in with account
        And I access to the "RewardApp" channel
        And I type the command "help" and the message "This is the list" should be displayed
        And I log out 