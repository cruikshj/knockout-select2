// Karma configuration
// Generated on Fri Jun 28 2013 14:51:32 GMT+0200 (CEST)

module.exports = function(config) {
  'use strict';
  config.set({
    basePath: '',
    frameworks: ['requirejs', 'mocha', 'expect'],
    files: [{
      pattern: 'bower_components/**/*.js',
      included: false
    }, {
      pattern: 'src/**.js',
      included: false
    }, {
      pattern: 'spec/knockout-select2.js',
      included: false
    }, 'spec/test-main.js'],

    exclude: [],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit'
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 8000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,
  });
};
