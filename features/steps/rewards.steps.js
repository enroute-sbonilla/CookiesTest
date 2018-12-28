import RewardsPage from '../page_objects/reward_page'

module.exports =  function() {
    this.Given(/^a client is in the reward page$/, function () {
        RewardsPage.open();
    });

    this.Given(/^the title "([^"]*)" should be displayed$/, function (title) {
        RewardsPage.messageValidation(RewardsPage.titleContainer, title);
    });

    this.When(/^the option "([^"]*)" is selected$/, function (option) {
        if (option === 'Rewards') {
            RewardsPage.goToOption(RewardsPage.rewardOption);
        } else if (option === 'About') {
            RewardsPage.goToOption(RewardsPage.aboutOption);
        }
    });

    this.Then(/^the slack logo should be displayed$/, function () {
        browser.isVisible(RewardsPage.slackLogo)
    });


}
