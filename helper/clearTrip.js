const I = actor();
const { assert } = require("console");
module.exports = {
    dismissBanner: function() {
      I.waitForText('By continuing, you agree to Cleartrip\'s',10);
      I.click('.flex-middle > svg');
      return this;
    },
    clickHotels: function(){
      I.click(locate('.listItemHover').withText('Hotels'))
      return this;
    },
  
    // Assertions
    assertTitle:async function(){
      let title = await I.grabTextFrom('h1');
      assert(title,'Search hotels');
      console.log(title);
      return this;
    }
   

}