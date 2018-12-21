
Feature: User should be able to send cookies to multiple coworkers in the app

    Scenario: A user should be able to send cookies to different coworkers
      Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "reward_test" channel
        And I type the command "reset daily cookies" and the message "The cookies has been reset." should be displayed
        Then I send "c-fmichel" and "enroute-crecio" one cookie
        And I access to the "RewardApp" channel and the message "You sent a total of 2"

    Scenario: A user should be able to send cookies to different coworkers
      Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "reward_test" channel
        And I type the command "reset daily cookies" and the message "The cookies has been reset." should be displayed
        Then I send "c-fmichel" and "enroute-crecio" two cookies
        And I access to the "RewardApp" channel and the message "You sent a total of 4"


    