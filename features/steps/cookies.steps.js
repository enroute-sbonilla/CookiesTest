import Board from '../page_objects/board_page';

module.exports =  function() {
    this.Then(/^I access to the "([^"]*)" channel(?: and the message "([^"]*)" should be displayed)?$/, function (channel, message) {
        // Write code here that turns the phrase above into concrete actions
        browser.waitForVisible(Board.jumpBtn);
        Board.jumpTo();
        browser.waitForVisible(Board.findChannel);
        Board.lookFor(channel);
        if(message != ''){Board.messageValidation(channel, message)};
      });
      
    this.Then(/I send "([^"]*)" (one|two|tree|four|five) (cookie|cookies)$/, function(tagg, number, icon) {
          let num = Board.numberOfCookies(number);
          let message = `@${tagg} ${Board.getCookieMsg(num)}`;
          Board.setMessage(message);
          Board.sendMessage();
      });

    this.Then(/I type the command "([^"]*)" and the message "([^"]*)" should be displayed$/, function(command, message) {
        Board.setMessage(command);
        Board.sendMessage();
        Board.messageValidation(command, message);
      });
}