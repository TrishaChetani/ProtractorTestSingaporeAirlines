#User Guide for Booking Online Air Tickets using automated script
 - it will simulate user actions in web browser and check if function works as expected.)
====
## Tech stacks

- [`Protractor`](http://www.protractortest.org/#/)
- webdriver-manager

## Test Scenario : Book Online Air Tickets
## Test Cases :
1. Open Google.com
2. Search for Singapore Airlines
3. Open Singapore airline website
4. Search for flight from Singapore to Bali
5. Select date of Start Travel Time = (Current date) & End Travel time = by default selected Value
6. Select bussiness class seat
7. Click on search


## 2.0 Setup
### Dev Setup nodejs and npm
* install node and npm
```
brew update
brew install node
```
* install protractor and webdriver-manager
```npm install protractor``` as to install all dependendies from package.json
```npm run webdriver-update``` as to update webdriver 
* Running locally on user machine for testing and debugging purpose we need to comment it out seleniumAddress: 'http://localhost:8080/wd/hub' on conf.js file


### 2.1. SELENIUM GRID (http://www.seleniumhq.org/docs/07_selenium_grid.jsp)
Currently selenium test is running on Grid using Docker
- The purpose of running test in grid because it speed the time of execution using parallel execution
- To run your tests against multiple browsers, multiple versions of browser, and browsers running on different operating systems.

```
### To remove existing container
if [ "$(docker ps -a | grep 'selenium/node-chrome:latest')" != "" ]; then
      docker ps -a | awk '{ print $1,$2 }' | grep selenium/node-chrome:latest | awk '{print $1 }' | xargs -I {} docker rm -f {}
fi
    
if [ "$(docker ps -a | grep 'selenium/hub:latest')" != "" ]; then
    docker ps -a | awk '{ print $1,$2 }' | grep selenium/hub:latest | awk '{print $1 }' | xargs -I {} docker rm -f {}
fi


### using docker compose set the grid
docker-compose up -d
docker-compose scale chrome=13

```


### 2.2. REPORTS
Currently the reports are implemented using plugin
```plugin
https://github.com/azachar/protractor-screenshoter-plugin
```
 - On failure of test this plugin will generate a screenshot 
 -  console error 
 Screenshot and console error will help on debugging/analyzing why test are failing .
 * `Relative part` of test report is : SingaporeAir/REPORTS/index.html

### 2.3. RUN TEST
Use the below command to run the test
```
./node_modules/protractor/bin/protractor conf.js
```

### 2.4 Folder Structure

- `Lib` Folder is having all library function
- `Page` Folder When writing end-to-end tests, a common pattern is to use Page Objects. Page Objects help you write cleaner tests by encapsulating information about the elements on your application page. A Page Object can be reused across multiple tests, and if the template of your application changes, you only need to update the Page Object.
- `Test Suite` testSuite will have test cases. All test cases will have proper log statement which will be easier for debugging in case of failure. Avoid writing web element directly inside testSuite.js folder as later don’t need to change anything on testSuite 
 - `data` contain any test data / hard coded data to be used in test
 Reuse the test data , ( avoid having duplicates)


 ## Video of Running Test 
 ```https://ufile.io/vqrlb```

