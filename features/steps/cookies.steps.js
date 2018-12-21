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
      
    this.Then(/I send "([^"]*)"(?: and "([^"]*)")?(?: and "([^"]*)")?(?: and "([^"]*)")?(?: and "([^"]*)")?(?: and "([^"]*)")? (one|two|tree|four|five) (cookie|cookies)$/, function(tagg1, tagg2, tagg3, tagg4, tagg5, number, icon) {
          let num = Board.numberOfCookies(number);
          let users = '';
          let message = '';
          if (tagg2 === 'x2' || tagg2 === '2') {
            users = `@${tagg1}`;
            console.log(`You can not multply tokens, you just sent ${num} cookies`)
          } else if ( tagg2 != '' && tagg2 != 'x2' && tagg2 != '2'){
            users = `@${tagg1} @${tagg2}`;
          }else if (tagg3 != '') {
            users = `@${tagg1} @${tagg2} @${tagg3}`;
           }else if (tagg4 != '') {
            users = `@${tagg1} @${tagg2} @${tagg3} @${tagg4}`;
          } else if (tagg5 != '') {
            users = `@${tagg1} @${tagg2} @${tagg3} @${tagg4} @${tagg5}`;
          } else {
            users = `@${tagg1}`;
          }

          switch (num) {
            case -1:
              message = ("Error, you can not send more than 5 tokens");
              break;
            case 0:
              message = ("Error, you must specify a valid number of tokens");
              break;
            default:
              message = `${users} ${Board.getCookieMsg(num)}`;
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