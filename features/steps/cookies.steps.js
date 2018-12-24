import Board from '../page_objects/board_page';

module.exports =  function() {
    this.Then(/^I access to the "([^"]*)" channel$/, function (channel) {
        // Write code here that turns the phrase above into concrete actions
        browser.waitForVisible(Board.jumpBtn);
        Board.jumpTo();
        browser.waitForVisible(Board.findChannel);
        Board.lookFor(channel);
      });

    this.Then(/^I access to the "([^"]*)" channel and the message "([^"]*)" should be displayed$/, function (channel, message) {
        // Write code here that turns the phrase above into concrete actions
        browser.waitForVisible(Board.jumpBtn);
        Board.jumpTo();
        browser.waitForVisible(Board.findChannel);
        Board.lookFor(channel);
        Board.messageValidation(channel, message)
      });
      
    this.Then(/I send "([^"]*)" (one|two|three|four|five|six) (cookie|cookies)$/, function(tagg1, number, icon) {
          let num = Board.numberOfCookies(number);
          let message = '';
        
          switch (num) {
            case -1:
              message = ("Error, you can not send more than 5 tokens");
              break;
            case 0:
              message = ("Error, you must specify a valid number of tokens");
              break;
            default:
              message = `@${tagg1} ${Board.getCookieMsg(num)}`;
          }
      
          Board.setMessage(message);
          Board.sendMessage();
      });

    this.Then(/I type the command "([^"]*)" and the message "([^"]*)" should be displayed$/, function(command, message) {
        browser.waitForVisible(Board.msgField)
        Board.setMessage(command);
        Board.sendMessage();
        Board.messageValidation(command, message);
      });
}