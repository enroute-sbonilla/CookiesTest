import { Page } from './page';

class SlackPage extends Page {
    get getDomain() {
        return ('//*[@id="domain"]');
    }

    get subDomain() {
        return ('//*[@id="submit_team_domain"]');
    }

    get signInAccount() {
        return ('//*[@id="page_contents"]/div[2]/div/form/p[1]/input');
    }

    sendMessage(text){
        this.message.setValue('');
        browser.click('')
        browser.pause(500);
    }

    open(maximized = true) {
        super.open('');
        if(maximized) super.maximize();
    }

    click(elem){
        super.click(elem);
    }

    setDomain(arg1) {
        browser.element(`${this.getDomain}`).setValue(arg1);
    }

    submitDomain() {
        browser.element(`${this.subDomain}`).click();
    }

    signIn() {
        browser.element(`${this.signInAccount}`).click();
    }
}

export default new SlackPage();
