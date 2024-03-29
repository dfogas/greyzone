const config = require('./config');

if (config.isProduction || config.isStaging || require('piping')(config.piping)) {
  if (!process.env.NODE_ENV)
    throw new Error('Environment variable NODE_ENV must be set.');

  // Load and use polyfill for ECMA-402 Internationalization
  if (!global.Intl)
    global.Intl = require('intl');

  require('babel-core/register');

  // To ignore webpack custom loaders on server.
  config.webpackStylesExtensions.forEach(function(ext) {
    require.extensions['.' + ext] = function() {};
  });

  require('./main');
}
