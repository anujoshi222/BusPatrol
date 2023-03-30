# BusPatrol

Repository for UAT for different websites

These tests are written using CodeceptJS with Puppeteer

I assume you have installed `nodeJS`, `npm` and `npx` (npm install -g npx).

* Clone this repository (git clone )
* npm install
* npm install -g npx (if not installed)

## Intention
* I wrote `_test` file for each of the scenario mentioned in the assessment test. Each of the _test file has it's helper functions defined in the helper folder.
* I have also used `fragment` for date picker component, it's inside fragments folder.
* Tests when run, generate a HTML report that can be viewed in the `mochawesome_report` directory.

## Steps to Run

Type this command for running tests *`serially`*
`npx codeceptjs run --steps`

Type this command for running tests in *`parallel`* in 4 chunks 
`npx codeceptjs run-multiple --steps --all`

Type this command for running tests serially + Mocha report is generated in this case
`npx codeceptjs run --steps --all --reporter mochawesome`
