import { Page } from './page';

class Board extends Page {
    get jumpBtn() {
        return ('//*[@id="col_channels_react_root"]/nav/div/div[1]/div/div[1]/div/div/div[1]/button');
    }

    get findChannel() {
        return ('/html/body/ts-jumper/ts-jumper-container/input');
    }

    get msgField() {
        return ('//*[@id="msg_input"]/div[1]');
    }

    get myCoinsMessage() {
        return ('//*[@id="messages_container"]/div[3]/div/div[2]/div/div[2]/div[1]/div/div/div[9]/div/div[2]/span');
    }

    get leaderBoardMessage() {
        return ('//*[@id="messages_container"]/div[3]/div/div[2]/div/div[2]/div[1]/div/div/div[10]/div/div[2]/span');
    }

    get cookieSent() {
        return ('//*[@id="messages_container"]/div[3]/div/div[2]/div/div[2]/div[1]/div/div/div[9]/div/div[2]/span');
    }

    jumpTo() {
        browser.element(`${this.jumpBtn}`).click();
    }
    
    lookFor(channel) {
        browser.element(`${this.findChannel}`).setValue(channel);
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
        if (number === 'two'){
            return 2;
        }else if(number === 'three'){
            return 3;
        }else if(number === 'four'){
            return 4;
        }else if(number === 'five'){
            return 5;
        }else{
            return 1;
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
       if(command === 'my cookies'){
            browser.waitForVisible(this.myCoinsMessage);
            this.assert(browser.element(this.myCoinsMessage).getText().includes(message), true);
       }else if(command === 'show leaderboard'){
            browser.waitForVisible(this.leaderBoardMessage);
            this.assert(browser.element(this.leaderBoardMessage).getText().includes(message),true);
       }else if(command === 'RewardApp'){
            browser.waitForVisible(this.cookieSent);
            this.assert(browser.element(this.cookieSent).getText().includes(message), true);
       }
   }
}

export default new Board();

