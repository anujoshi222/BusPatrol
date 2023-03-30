# BusPatrol

I assume you have installed nodeJS, npm. Once you have done this, the rest is easy

# clone this repository
# npm install
# npm install codeceptjs puppeteer --save

open a console in the cloned repository and type:


Type this command for running tests serially + Mocha report is generated in this case
# npx codeceptjs run --steps --reporter mochawesome

Type this command for running tests serially
# npx codeceptjs run --steps --reporter  

Type this command for running tests in parallel in 4 chunks 
# npx codeceptjs run-multiple --steps --all 