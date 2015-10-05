/* eslint-env node */

module.exports = function(config) {

  var cfg = {
    // autoWatch, it works enabled or not. Probably defined by singleRun.
    basePath: '',
    browsers: ['ChromeSmall'],
    coverageReporter: process.env.CONTINUOUS_INTEGRATION ? {
      type: 'lcov',
      dir: 'coverage/'
    } : {
      type: 'html',
      dir: 'coverage/'
    },
    customLaunchers: {
      ChromeSmall: {
        base: 'Chrome',
        // Unfortunately it's not possible to hide browser via negative position,
        // and minimized browser is not detected by Karma.
        flags: ['--window-size=200,200']
      },
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    exclude: ['./node_modules'],
    files: [
      'src/test/index.js'
    ],
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],
    logLevel: process.env.CONTINUOUS_INTEGRATION
      ? config.LOG_WARN
      : config.LOG_INFO,
    notifyReporter: {
      reportSuccess: false
    },
    port: 9876,
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // preprocess with webpack and our sourcemap loader
      'src/test/index.js': ['webpack', 'sourcemap']
    },
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: process.env.CONTINUOUS_INTEGRATION ? [
      'coverage'
    ] : [
      'progress', 'coverage', 'notify'
    ],
    webpack: require('./webpack/makeconfig')(true),
    webpackServer: {
      noInfo: true
    }
  };

  if (process.env.TRAVIS) {
    cfg.browsers = ['Chrome_travis_ci'];
  }

  config.set(cfg);

};
