const I = actor();
const { assert } = require("console");
module.exports = {
    // User Actions
    fillGameTitle: function(gameName) {
        I.fillField('#advsearch-title', gameName);
        return this;
    },
    fillMinYear: function(year) {
        I.fillField('#advsearch-yearpublished-min',year);
        return this;
    },
    fillMaxYear: function(year) {
        I.fillField('#advsearch-yearpublished-max',year);
        return this;
    },
    selectMinPlayingTime: function(time) {
        I.fillField('#advsearch-min-playing-time', time);
        return this;
    },
    selectMaxPlayingTime: function(time) {
        I.fillField('#advsearch-max-playing-time', time);
        return this;
    },
    clickSubmit:function(){
        I.click(locate('input').withAttr({value:'Submit'}));
        return this;
    },

// Assertions
   assertUserSeeGameLink:function(linkText){
    I.see(linkText, {css: '.table-responsive'});
    return this;
    },
    printLinkName:async function(){
        let linkName = await I.grabAttributeFrom('a.primary', 'text')
        assert(href, 'Harry Potter and the Sorcerer\'s Stone Trivia Game')
        console.log(linkName)
        return this;
    }
}