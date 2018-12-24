Feature: A user should not be able to send cookies this way

   Scenario: A user should not be able to send tokens to himself
      Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "RewardApp" channel
        And I type the command "reset daily cookies" and the message "The cookies has been reset." should be displayed
        And I access to the "reward_test" channel
        Then I send "Santiago" one cookie
        And I access to the "RewardApp" channel and the message "Very funny, but you can't send cookies to yourself." should be displayed
        And I log out

    Scenario: A user should not be able to send more than 5 cookies at a time
      Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "RewardApp" channel
        And I type the command "reset daily cookies" and the message "The cookies has been reset." shoul be displayed
        And I access to the "reward_test" channel
        Then I send "c-fmichel" and "enroute-crecio" three cookies
        And I access to the "RewardApp" channel and the message "You are trying to send 6"
        And I log out

    Scenario: A user should not be able to send tokens using @here
      Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "RewardApp" channel
        And I type the command "reset daily cookies" and the message "The cookies has been reset." should be displayed
        And I access to the "reward_test" channel
        Then I send "here" one cookie
        And I access to the "RewardApp" channel and the message "Very funny, but you can't send tacos to yourself." should be displayed
        And I log out

    Scenario: A user should not be able to send tokens using @here
      Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "RewardApp" channel
        And I type the command "reset daily cookies" and the message "The cookies has been reset." should be displayed
        And I access to the "reward_test" channel
        Then I send "channel" one cookie
        And I access to the "RewardApp" channel and the message "Very funny, but you can't send tacos to yourself." should be displayed
        And I log out

    Scenario: A user should not be able to send tokens by multipliying them
      Given a client is in Slack sign in page
        And I type "jwplayer" to access 
        When I log in with account
        And I access to the "RewardApp" channel
        And I type the command "reset daily cookies" and the message "The cookies has been reset." should be displayed
        And I access to the "reward_test" channel
        Then I send "enroute-crecio" "x2" one cookie
        And I access to the "RewardApp" channel and the message "You sent 1 cookie to" should be displayed
        And I log out