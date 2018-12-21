
Feature: User should be able to send cookies in the app

    Scenario: A user should be able to send 1 cookie to coworkers
      Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "reward_test" channel
        And I type the command "reset daily cookies" and the message "The cookies has been reset." should be displayed
        Then I send "c-fmichel" one cookie
        And I access to the "RewardApp" channel and the message "You sent 1 cookie to" should be displayed
        And I log out
    
    Scenario: A user should be able to send 2 cookies to coworkers
       Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "reward_test" channel
        And I type the command "reset daily cookies" and the message "The cookies has been reset." should be displayed
        Then I send "c-fmichel" two cookies
        And I access to the "RewardApp" channel and the message "You sent 2 cookies to" should be displayed
        And I log out
    
    Scenario: A user should be able to send 3 cookies to coworkers
      Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "reward_test" channel
        And I type the command "reset daily cookies" and the message "The cookies has been reset." should be displayed
        Then I send "c-fmichel" three cookies
        And I access to the "RewardApp" channel and the message "You sent 3 cookies to" should be displayed
        And I log out
    
    Scenario: A user should be able to send 4 cookies to coworkers
      Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "reward_test" channel
        And I type the command "reset daily cookies" and the message "The cookies has been reset." should be displayed
        Then I send "c-fmichel" four cookies
        And I access to the "RewardApp" channel and the message "You sent 4 cookies to" should be displayed
        And I log out
    
    Scenario: A user should be able to send 5 cookies to coworkers
      Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "reward_test" channel
        And I type the command "reset daily cookies" and the message "The cookies has been reset." should be displayed
        Then I send "c-fmichel" five cookies
        And I access to the "RewardApp" channel and the message "You sent 5 cookies to" should be displayed
        And I log out