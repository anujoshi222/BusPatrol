const {datePickerFragment} = inject();

Feature('Spicejet');
Scenario('Spicejet Test Scenario',  async ({ I, H, spiceJet }) => {
    H.navigateToWebsite('https://www.spicejet.com')
    I.waitForText('Welcome aboard.');

    spiceJet.selectRoundTrip();
    spiceJet.selectOrigin();
    spiceJet.selectDestination();

    datePickerFragment.selectInNextMonth(1);
    datePickerFragment.selectInNextMonth(15);

    spiceJet.expandPassengersDropdown();
    spiceJet.addtravellers('Adult',1);
    spiceJet.addtravellers('Children',3);
    spiceJet.addtravellers('Infant',1);

    spiceJet.selectUSCurrency();
    spiceJet.clickSearchFlight();
    
    H.checkUrl('/search')
    spiceJet.printRedirectedUrl();
}); 