import RewardsPage from '../page_objects/reward_page'
import { Page } from '../page_objects/page';
module.exports =  function() {
    this.Given(/^a client is in the reward page$/, function () {
        // Write code here that turns the phrase above into concrete actions
        RewardsPage.open();
    });

    this.Given(/^the title "([^"]*)" should be displayed$/, function (title) {
        // Write code here that turns the phrase above into concrete actions
        RewardsPage.messageValidation(RewardsPage.titleContainer, title);
    });

}
