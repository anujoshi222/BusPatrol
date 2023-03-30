const I = actor();
const puppeteer = require("puppeteer");

module.exports = {
    checkUrl: function(link) {
        I.waitInUrl(link, 7);
        return this;
    },
    navigateToWebsite:async function(link) {
        I.amOnPage(link);
        I.wait(5);
        await I.grabNumberOfOpenTabs();
        return this;
    },
}