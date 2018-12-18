import { Page } from './page';

class Keys extends Page{
    get userEmail(){
        return ('******@jwplayer.com');
    }

    get userPswd() {
        return ('********');
    }

    get email() {
        return ('//*[@id="email"]');
    }
    get password() {
        return ('//*[@id="password"]');
    }
    get submitBtn() {
        return ('//*[@id="signin_btn"]');
    }

    setEmail() {
        browser.element(`${this.email}`).setValue(this.userEmail);
    }
    
    setPassword() {
        browser.element(`${this.password}`).setValue(this.userPswd);
    }

    submitButton() {
        browser.element(`${this.submitBtn}`).click();
    }

}

export default new Keys();
