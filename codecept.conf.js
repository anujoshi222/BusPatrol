const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './test/*_test.js',
  multiple: {
    parallel: {
      chunks: 4,
      browsers: ['puppeteer']
    }
  },
  output: './mochawesome_report',
  helpers: {
    Puppeteer: {
      url: 'https://www.fourmodules.com',
      show: false,
      restart: false,
      chrome: {args:['--no-sandbox','--disable-setuid-sandbox','--disable-accelerated-2d-canvas','--disable-gpu']},
      windowSize: '1500x1200',
      waitForNavigation: ['networkidle2','domcontentloaded']
    },
    Mochawesome: {
    uniqueScreenshotNames: "true"
}
  },
  AssertWrapper: {
  require: "codeceptjs-assert"
},
  include: {
    I: './steps_file.js',
    fourModules: './helper/fourModules.js',
    clearTrip: './helper/clearTrip.js',
    boardGame:'./helper/boardGame.js',
    spiceJet: './helper/spicejet.js',
    datePickerFragment: './fragments/datePicker.js',
    H: './helper/homePageHelper.js'
  },
  mocha: {
  reporterOptions: {
      reportDir: "mochawesome_report",
      uniqueScreenshotNames: true
  }
},
  name: 'BusPatrol'
}
