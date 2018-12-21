import SlackPage from '../page_objects/slack.page';
import Keys from '../page_objects/keys';

module.exports =  function() {
    this.Given(/^a client is in Slack sign in page$/, function () {
        // Write code here that turns the phrase above into concrete actions
       SlackPage.open(true);
    });

    this.Then(/^I type "([^"]*)" to access$/, function (domain) {
        browser.waitForVisible(SlackPage.getDomain);
        SlackPage.setDomain(domain);    
        SlackPage.submitDomain();
        browser.waitForVisible(SlackPage.signInAccount);
        SlackPage.signIn();
      });

    this.When(/^I log in with account$/, function () {
        // Write code here that turns the phrase above into concrete actions
        browser.waitForVisible('//*[@id="email"]');
        Keys.setEmail();
        Keys.setPassword();
        Keys.submitButton();
      });

    this.Then(/^I type "([^"]*)" to access without login$/, function (domain) {
        browser.waitForVisible(SlackPage.getDomain);
        SlackPage.setDomain(domain);    
        SlackPage.submitDomain();
      });

    this.Then(/^I log out$/, function() {
        SlackPage.close();
      });
}