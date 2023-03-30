const { assert } = require("console");

Feature('Board Game Geek');
Scenario('Board Game Geek Test Scenario', ({ I, H, boardGame }) => {
  H.navigateToWebsite('https://www.boardgamegeek.com/advsearch/boardgame.com');

  I.waitForElement('#container');
  boardGame.fillGameTitle('Harry Potter and the Sorcerer\'s Stone Trivia Game');
  boardGame.fillMinYear('1999');
  boardGame.fillMaxYear('2000');
  boardGame.selectMinPlayingTime('15 minutes');
  boardGame.selectMinPlayingTime('1.5 hours');

  boardGame.clickSubmit();
  H.checkUrl('/geeksearch.php'); 

  boardGame.assertUserSeeGameLink('Harry Potter and the Sorcerer\'s Stone Trivia Game');

  boardGame.printLinkName();

});