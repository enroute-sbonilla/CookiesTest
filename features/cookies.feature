
Feature: Sending cookies

    Scenario: I want to use the commands in the app
        Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "RewardApp" channel
        And I type the command "my cookies"

    Scenario: A client should be able to send cookies to coworkers
        Given a client is in Slack sign in page
        And I type "jwplayer" to access without login
        And I access to the "reward_test" channel
        Then I send "c-fmichel" two cookies
        And I send "enroute-crecio" tree cookies
        And I access to the "RewardApp" channel
    
    Scenario: A client should be able to see the leaderboard
        Given a client is in Slack sign in page
        And I type "jwplayer" to access without login
        And I access to the "reward_test" channel
        And I type the command "show leaderboard"   


    