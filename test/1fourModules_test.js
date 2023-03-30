Feature('Four Modules');

Scenario('Four Modules Test Scenario', ({ I, H, fourModules }) => {
    H.navigateToWebsite('/');
    fourModules.hoverOverAbout();
    I.waitForClickable('.dropdown');

    fourModules.assertSubMenuOptions();
    fourModules.clickOnAbout();
    H.checkUrl('/ielts');

    fourModules.assertAnyQuestionBtn();
    fourModules.clickAnyQuestionsBtn();
    fourModules.clickCrossBtn();

    fourModules.clickTakeFreeDemoBtn();
    H.checkUrl('/signup');
});
