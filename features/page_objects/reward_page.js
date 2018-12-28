import { Page } from './page';

class RewardsPage extends Page {
    get titleContainer() {
        return ('//*[@id="content"]/div/div/header/h1');
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
}

export default new RewardsPage();
