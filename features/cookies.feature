
Feature: Sending cookies

    Scenario: I want to use the commands in the app
        Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "RewardApp" channel
        And I type the command "my cookies" and the message "You have" should be displayed

    Scenario: A client should be able to send 1 cookie to coworkers
        Given a client is in Slack sign in page
        And I type "jwplayer" to access without login
        And I access to the "reward_test" channel
        Then I send "c-fmichel" one cookies
        And I access to the "RewardApp" channel and the message "You sent 1 cookie to" should be displayed
    
    Scenario: A client should be able to see the leaderboard
        Given a client is in Slack sign in page
        And I type "jwplayer" to access without login
        And I access to the "reward_test" channel
        And I type the command "show leaderboard" and the message "===== Top 10 =====" should be displayed
    