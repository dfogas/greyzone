var MongoStore = require('mongo-store');
var nconf = require('nconf');

// Specifying an env delimiter allows you to override below config when shipping to production server
// by e.g. defining piping__ignore or version variables.
nconf.env('__');
var password = 'jajsemmuzikantaprichazimkvamzceskezeme';

var config = {
  apipath: '/api/v1',
  appLocales: ['en', 'fr'],
  datastorage: process.env.NODE_ENV === 'production' ?
    'mongodb://admin:' + password + '@ds055852.mongolab.com:55852/mbase' :
    'mongodb://localhost:27017/mbase',
  defaultLocale: 'en',
  googleAnalyticsId: 'UA-XXXXXXX-X',
  herokuAppAdress: 'http://guarded-cliffs-7174.herokuapp.com',
  isProduction: process.env.NODE_ENV === 'production',
  piping: {
    // Ignore webpack custom loaders on server. TODO: Reuse index.js config.
    ignore: /(\/\.|~$|\.(css|less|sass|scss|styl))/,
    // Hook ensures always fresh server response even for client file change.
    hook: true
  },
  port: process.env.PORT || 8000,
  sessionOptions: {
    resave: false,
    saveUninitialized: true,
    secret: 'keyboard cat',
    session: new MongoStore({
      url: this.datastorage,
      collection: 'sessions'
    })
  },
  version: require('../../package').version,
  webpackStylesExtensions: ['css', 'less', 'sass', 'scss', 'styl']
};

// Use above config as a default one
// Multiple other providers are available like loading config from json and more
// Check out nconf docs for fancier examples
nconf.defaults(config);

module.exports = nconf.get();
