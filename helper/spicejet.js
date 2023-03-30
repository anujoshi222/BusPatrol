const I = actor();
const { assert } = require("console");

module.exports = {
  // User Actions
  selectRoundTrip:function(){
    I.click({css: 'div[data-testid=round-trip-radio-button]'});
  },
  selectOrigin:function(){
    I.click({css:'div[data-testid=to-testID-origin]'});
    I.seeTextEquals('Select a region and city below', '.css-1dbjc4n .r-1yflyrw');
    I.click({css:'div.css-1dbjc4n.r-knv0ih.r-1k1q3bj.r-ql8eny.r-1dqxon3 > div:nth-child(1)'});
    I.wait(1);
    return this;
  },
  selectDestination:function(){
    I.waitForClickable({css:'div.css-1dbjc4n.r-knv0ih.r-1k1q3bj.r-ql8eny.r-1dqxon3 > div:nth-child(3)'},5);
    I.click({css:'div.css-1dbjc4n.r-knv0ih.r-1k1q3bj.r-ql8eny.r-1dqxon3 > div:nth-child(3)'});
    return this;
  },
    addtravellers: function(travellerType,count){
    for(let i=1;i<=count;i++){
    I.click(`div[data-testid=${travellerType}-testID-plus-one-cta]`)
    }
  },
  expandPassengersDropdown: function(){
    I.click('div[data-testid=home-page-travellers]');
    return this;
  },
  selectUSCurrency:function(){
    I.click('div.css-1dbjc4n.r-18u37iz.r-19h5ruw.r-184en5c > div:nth-child(2) > div');
    I.wait(2);
    I.click(locate('div.css-1dbjc4n.r-1habvwh.r-1loqt21.r-1777fci.r-1mi0q7o.r-1yt7n81.r-m611by.r-1otgn73:nth-child(3)').withText('USD'));
    return this;
  },
  clickSearchFlight: function(){
    I.click('div[data-testid=home-page-flight-cta]');
    return this;
  },
  printRedirectedUrl:async function(){
    let currenturl = await I.grabCurrentUrl();
    console.log(currenturl);
  },
}