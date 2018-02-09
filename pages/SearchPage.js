var EC = protractor.ExpectedConditions;
/**
 *  provides DOM elements for google search page
 */
var searchPage = function() {
    this.searchTextBox = element(by.css('input[name="q"]'));
    this.resultStats = element(by.id('resultStats'));
    this.clickResultLink = element(by.linkText("Singapore Airlines Official Website | Book flights from The United States"));


    /**
     * navigate to Google Search Text box
     */
    this.navigateSearchBox = function() {
        var self = this;
        browser.wait(EC.visibilityOf(self.searchTextBox), 25000).then(function() {
            console.log("navigate to google search box");
            self.searchTextBox.click();

        });
    };

    /**
     * key-in inside search box
     */
    this.enterTextToSearch = function(searchKeyword) {
        var self = this;
        browser.wait(EC.visibilityOf(self.searchTextBox), 25000).then(function() {
            console.log("search for text in Google search box", searchKeyword);
            self.searchTextBox.sendKeys(searchKeyword);
            browser.actions().sendKeys(protractor.Key.ENTER).perform();
        });
    };

    /**
     * provide click on search result
     */
    this.clickOnSearchResult = function() {
        var self = this;
        browser.wait(EC.visibilityOf(self.resultStats), 25000).then(function() {
            console.log("click on search result");
            browser.wait(EC.visibilityOf(self.clickResultLink), 25000)
            self.clickResultLink.click();

        });
    }
};

module.exports = new searchPage();