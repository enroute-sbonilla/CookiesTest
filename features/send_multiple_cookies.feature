
Feature: User should be able to send cookies to multiple coworkers in the app

    Scenario: A user should be able to send cookies to different coworkers
      Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "RewardApp" channel
        And I type the command "reset daily cookies" and the message "The cookies has been reset." should be displayed
        And I access to the "reward_test" channel
        Then I send "c-fmichel enroute-crecio" one cookie
        And I access to the "RewardApp" channel and the message "You sent a total of 2" should be displayed
        And I log out

    Scenario: A user should be able to send cookies to different coworkers
      Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "RewardApp" channel
        And I type the command "reset daily cookies" and the message "The cookies has been reset." should be displayed
        And I access to the "reward_test" channel
        Then I send "c-fmichel enroute-crecio akolodny" one cookies
        And I access to the "RewardApp" channel and the message "You sent a total of 3" should be displayed
        And I log out

    Scenario: A user should be able to send cookies to different coworkers
      Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "RewardApp" channel
        And I type the command "reset daily cookies" and the message "The cookies has been reset." should be displayed
        And I access to the "reward_test" channel
        Then I send "c-fmichel enroute-crecio akolodny atoppa" one cookies
        And I access to the "RewardApp" channel and the message "You sent a total of 4" should be displayed
        And I log out

    Scenario: A user should be able to send cookies to different coworkers
      Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "RewardApp" channel
        And I type the command "reset daily cookies" and the message "The cookies has been reset." should be displayed
        And I access to the "reward_test" channel
        Then I send "c-fmichel enroute-crecio akolodny atoppa msalvia" one cookies
        And I access to the "RewardApp" channel and the message "You sent a total of 5" should be displayed
        And I log out
 
    Scenario: A user should be able to send cookies to different coworkers
      Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "RewardApp" channel
        And I type the command "reset daily cookies" and the message "The cookies has been reset." should be displayed
        And I access to the "reward_test" channel
        Then I send "c-fmichel enroute-crecio" two cookies
        And I access to the "RewardApp" channel and the message "You sent a total of 4" should be displayed
        And I log out
    