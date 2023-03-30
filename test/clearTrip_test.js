const { assert } = require("console");

Feature('Clear Trip');
Scenario('Clear Trip Test Scenario - Most of the times this website does not load', ({I, H, clearTrip}) => {
    I.clearCookie();
    H.navigateToWebsite('https://www.cleartrip.com')
    clearTrip.dismissBanner();

    clearTrip.clickHotels();
    H.checkUrl('/hotels')

    clearTrip.assertTitle();

});