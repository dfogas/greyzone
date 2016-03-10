// Browser ES6 Polyfill
require('babel/polyfill');

// does not work with mocha
var testsContext = require.context('.', true, /spec.js$/);
testsContext.keys().forEach(testsContext);
