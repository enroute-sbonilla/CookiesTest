import { Page } from './page';

class RewardsPage extends Page {
    get titleContainer() {
        return ('//*[@id="content"]/div/div/header/h1');
    }
    
    get rewardOption() {
        return ('//*[@id="main-menu"]/li[2]/a');
    }

    get aboutOption() {
        return ('//*[@id="main-menu"]/li[3]/a');
    }

    get slackLogo () {
        return ('/html/body/nav[1]/a');
    }

    open(maximized = true) {
        super.openRewd('');
        if(maximized) super.maximize();
    }

    close() {
        super.close();
    }

    click(elem){
        super.click(elem);
    }

    messageValidation(element, message) {
        browser.waitForVisible(element);
        this.assert(browser.element(element).getText().includes(message), true);
    }

    goToOption(option) {
        browser.waitForVisible(option);
        browser.element(option).click();
    }
}

export default new RewardsPage();
