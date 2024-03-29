var passwords = require('./passwords');
var nconf = require('nconf');

// Specifying an env delimiter allows you to override below config when shipping to production server
// by e.g. defining piping__ignore or version variables.
nconf.env('__');

var config = {
  apipath: '/api/v1',
  appLocales: ['en', 'cz'],
  dataserverlog: process.env.NODE_ENV === 'production' ?
    'ds055852.mlab.com' :
    process.env.NODE_ENV ?
    'mongodb://localhost:27017/mbase' :
    // for API test
    'mongodb://localhost:27017/mtest',
  datastorage: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging' ?
    'mongodb://admin:' + passwords.mbase + '@ds055852.mlab.com:55852/mbase' :
    process.env.NODE_ENV ?
    'mongodb://localhost:27017/mbase' :
    // for API test
    'mongodb://localhost:27017/mtest',
  defaultLocale: 'en',
  dns: process.env.NODE_ENV === 'production' ? 'https://www.ghoststruggle.com' :
    'http://localhost:8000',
  googleAnalyticsId: 'UA-77300811-1',
  isProduction: process.env.NODE_ENV === 'production',
  isStaging: process.env.NODE_ENV === 'staging',
  paypal: {
    configuration: {
      'mode': process.env.NODE_ENV === 'production' ? 'live' : 'sandbox',
      'client_id': process.env.NODE_ENV === 'production'
        ? 'ARX2tIvUWeatMK76ByR5Ah4eC3QZ4AnVx--uoukqEQ1bCexLgMqc48dnRu-pMRkrtX-QNGrUPN5nqT9U'
        : 'ASeVvgbUxX4kOI8YCk_in3_5QNUNP2-BfBqU3yHGO7ydQ2eHLbe593CLyBgZT7RrLkZe5K_QpkojtKQz',
      'client_secret': process.env.NODE_ENV === 'production'
        ? 'EB9tntFIjTX6aBGTx36dN-3Ft7gZJryPC8KLZwEswf321yU0kAeGCmUg5kbTVitZ-FoqvtJ03su8JtH_'
        : 'EHcj0-gW6H82eEbHFdsr-o-PX91XtEmHlQBvy-e6ZB8xpnV_bTbdOqw6IY3N-KnxqctjMRNkMriLFN3Y'
    }
  },
  piping: {
    // Ignore webpack custom loaders on server. TODO: Reuse index.js config.
    ignore: /(\/\.|~$|\.(css|less|sass|scss|styl))/,
    // Hook ensures always fresh server response even for client file change.
    hook: true
  },
  port: process.env.PORT || 8000,
  strawman: 'j.drapal@ghoststruggle.com',
  version: require('../../package').version,
  webpackStylesExtensions: ['css', 'less', 'sass', 'scss', 'styl']
};

// Use above config as a default one
// Multiple other providers are available like loading config from json and more
// Check out nconf docs for fancier examples
nconf.defaults(config);

module.exports = nconf.get();
