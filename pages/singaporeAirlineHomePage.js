var EC = protractor.ExpectedConditions;
/**
 *  provides DOM elements for Singapore Airline Home Page
 */
var singaporeAirlineHomePage = function() {
    this.destinationDropDown = element(by.css('input[name="destinationDropDown"]'));
    this.selectSeatClassComboBox = element(by.xpath('//*[@id="customSelect-0-combobox"]'));
    this.selectBusinessClassDropdown = element(by.xpath('//*[@id="customSelect-0-option-2"]'))
    this.searchButton = element(by.css('div[class=grid-inner] >input[type=submit][id=city-travel-input-2]'))



    /**
     * navigate to enter destination
     */
    this.enterDestination = function(destination) {
        var self = this;
        browser.wait(EC.visibilityOf(self.destinationDropDown), 25000).then(function() {
            console.log("enter Destination");
            self.destinationDropDown.click();
            self.destinationDropDown.sendKeys(destination);
            browser.actions().sendKeys(protractor.Key.TAB).perform();
            browser.wait(EC.invisibilityOf($('.autocomplete-item ui-menu-item')), 5000);
        });
    };



    /**
     * select Seat class as business
     */
    this.selectBusinessSeatClass = function() {
        var self = this;
        browser.executeScript("arguments[0].click()", self.selectSeatClassComboBox).then(function() {
            console.log("select seat class as business");
            self.selectBusinessClassDropdown.click()
        });
    }

    /**
    * click on search button
    */
    this.clickOnSearchButton = function(){
        var self = this;
        browser.wait(EC.visibilityOf(self.searchButton), 25000).then(function() {
            console.log("click search button");
            self.searchButton.click();
        });
    }
};

module.exports = new singaporeAirlineHomePage();