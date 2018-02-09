var searchPage = require('../pages/SearchPage.js');
var data = require('../data/testdata.js');
var singaporAirlineHomePage = require('../pages/singaporeAirlineHomePage.js')
var moment = require('moment');


/**
 * Test Class for Booking Online Air tickets
 */

describe('Booking Online Air tockets', function() {
    beforeAll(function() {
        browser.waitForAngularEnabled(false);
    });


    /**
     * provides verification of Online Booking of air tickets 
     */
    it('CaseO1: Booking Online Air Tickets using Singapore Airline', function() {
        console.log("\033[1m TestCase:  Booking Online Air Tickets using Singapore Airline \033[0m");
        browser.get(`${browser.params.host}`, 5000);
        searchPage.navigateSearchBox();
        searchPage.enterTextToSearch(data.searchKeyword);
        searchPage.clickOnSearchResult();
        singaporAirlineHomePage.enterDestination(data.destination);
        singaporAirlineHomePage.selectBusinessSeatClass();
        singaporAirlineHomePage.clickOnSearchButton();


    });

});