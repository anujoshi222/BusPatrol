const I = actor();
module.exports = {
    
    // User Actions
    hoverOverAbout: function(){
        I.moveCursorTo(".dropdown > a");
        return this;
    },
    clickOnAbout:function(){
        I.click(locate('.dropdown').withText('About'));
        return this;
    },
    clickAnyQuestionsBtn:function(){
        I.forceClick(locate('.btn').withText('Any Questions?'));
        return this;
    },
    clickCrossBtn:function(){
        I.forceClick('.modal-header > button');
        return this;
    },
    clickTakeFreeDemoBtn:function(){
        I.click(locate('.btn').withText('Take Free Demo'));
        return this;
    },
    
    // Assertions
    assertSubMenuOptions:function(){
        I.see('About', {css: '.link-page'});
        I.see('Pricing & Package', {css: '.link-page'});
        return this;
    },
    assertAnyQuestionBtn:function(){
        I.see('ANY QUESTIONS?', {css: '.btn'});
        return this;
    }

        

}