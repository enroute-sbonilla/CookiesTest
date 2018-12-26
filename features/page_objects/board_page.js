import { Page } from './page';

class Board extends Page {
    get jumpBtn() {
        return ('//*[@id="col_channels_react_root"]/nav/div/div[1]/div/div[1]/div/div/div[1]/button');
    }

    get pruebaSpan() {
        return ('span.c-message__body');
    }

    get findChannel() {
        return ('/html/body/ts-jumper/ts-jumper-container/input');
    }

    get msgField() {
        return ('//*[@id="msg_input"]/div[1]');
    }

    get myCoinsMessage() {
        return ('//*[@id="messages_container"]/div[3]/div/div[2]/div/div[2]/div[1]/div/div/div[13]/div/div[2]/span');
    }

    get leaderBoardMessage() {
        return ('//*[@id="messages_container"]/div[3]/div/div[2]/div/div[2]/div[1]/div/div/div[7]/div/div[2]/span');
    }

    get cookieSentMessage() {
        return ('//*[@id="messages_container"]/div[3]/div/div[2]/div/div[2]/div[1]/div/div/div[5]/div/div[2]/span');
    }

    get helpMessage() {
        return ('//*[@id="messages_container"]/div[3]/div/div[2]/div/div[2]/div[1]/div/div/div[8]/div/div[2]/div[2]/div');
    }

    get selfSendMessage() {
        return ('//*[@id="messages_container"]/div[3]/div/div[2]/div/div[2]/div[1]/div/div/div[6]/div/div[2]/span');
    }

    get resetCookiesMessage() {
        return ('//*[@id="messages_container"]/div[3]/div/div[2]/div/div[2]/div[1]/div/div/div[8]/div/div[2]/span');
    }

    jumpTo() {
        browser.element(`${this.jumpBtn}`).click();
    }
    
    lookFor(channel) {
        browser.element(`${this.findChannel}`).setValue(channel);
        browser.pause(500);
        browser.keys("\uE007"); 
    }

    setMessage(message){
        browser.element(`${this.msgField}`).setValue(message);
    }

    sendMessage(){
        browser.keys("\uE007");
        browser.pause(2500);
    }

    numberOfCookies(number) {
        if (number === 'zero') {
            return 0;
        } else if (number === 'one') {
            return 1;
        } else if (number === 'two') {
            return 2;
        } else if (number === 'three') {
            return 3;
        } else if (number === 'four') {
            return 4;
        } else if (number === 'five') {
            return 5;
        } else if (number === 'six') {
            return 6;
        } else {
            return -1;
        }
    }

    getCookieMsg(num) {
        let cookie = ':cookie:';
        let cookieMsg = '';

        for (let i = 0; i < num; i++) {
            cookieMsg = cookieMsg.concat(cookie);
        }

        return cookieMsg;
   }

   messageValidation(command, message) {
       if (command === 'my cookies') {
            browser.waitForVisible(this.myCoinsMessage);
            this.assert(browser.element(this.myCoinsMessage).getText().includes(message), true);
       } else if(command === 'show leaderboard') {
            browser.waitForVisible(this.leaderBoardMessage);
            console.log(browser.element(this.leaderBoardMessage).getText());
            this.assert(browser.element(this.leaderBoardMessage).getText().includes(message),true);
       } else if(command === 'RewardApp') {
            browser.waitForVisible(this.cookieSentMessage);
            this.assert(browser.element(this.cookieSentMessage).getText().includes(message), true);
       } else if(command === 'reset daily cookies') {
           browser.waitForVisible(this.resetCookiesMessage);
           this.assert(browser.element(this.resetCookiesMessage).getText().includes(message), true);
       } else if(command === 'help') {
            browser.waitForVisible(this.helpMessage);
            this.assert(browser.element(this.helpMessage).getText().includes(message), true);
       }
    }
}

export default new Board();