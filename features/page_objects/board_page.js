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
        }else if(number === 'tree'){
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
}

export default new Board();
