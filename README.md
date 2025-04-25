# Selenium_demo_JS

just a demo/practice for a selenium project with javascript

1- add the selenium web driver

2- add assertion library

3- install mocha
npm install mocha

then add a "describe" block and "it" block

-------------------------------------------------------------------------------------
Change package json:
"scripts": {
     "test": "mocha --no-timeouts --parallel"
},
-------------------------------------------------------------------------------------

4- install mochawesome
npm install mochawesome

5- add in the json script
--reporter mochawesome
--require mochawesome/register
--reporter-options reportDir=./mochawesome-report,reportFilename=mochawesomeReport


