/**
 * config file
 */
exports.config = {
    seleniumAddress: 'http://localhost:8080/wd/hub',
    rootElement: 'body',
    allScriptsTimeout: 60000,
    framework: 'jasmine',
    jasmineNodeOpts: {
        // If true, display spec names.
        isVerbose: true,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 600000
    },
    multiCapabilities: [{
        'specs': ['testSuites/SingaporeAirlinesTestCases.js'],
        'browserName': 'chrome',
        'loggingPrefs': {
            'driver': 'WARNING',
            'server': 'WARNING',
            'browser': 'INFO',
            'performance': 'ALL',
        },
        shardTestFiles: true,
        maxInstances: 1,
        chromeOptions: {
            'args': ['--disable-web-security', '--no-sandbox', '--disable-infobars', "--enable-gpu-benchmarking", "--enable-thread-composting"]

        }
    }],
    //directConnect: true,
    params: {
        host: "https://www.google.com.sg/"
    },
    plugins: [{
        package: 'protractor-screenshoter-plugin',
        screenshotPath: './REPORTS',
        screenshotOnExpect: 'failure+success',
        screenshotOnSpec: 'none',
        withLogs: true,
        writeReportFreq: 'asap',
        imageToAscii: 'none',
        clearFoldersBeforeTest: true
    }],

    onPrepare: function() {
 
    }
};