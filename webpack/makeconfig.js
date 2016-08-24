/* @flow weak */
'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var NotifyPlugin = require('./notifyplugin');
var constants = require('./constants');
var path = require('path');
var poststylus = require('poststylus');
var webpack = require('webpack');

var loaders = {
  'css': '!css-loader',
  'styl': '!stylus-loader'
};

module.exports = function(isDevelopment) {

  var constStyleLoaders = isDevelopment
  ? [{
      loader: `style-loader!css-loader!postcss-loader`,
      test: /\.css$/
    }, {
      loader: `style-loader!css-loader!stylus-loader`,
      test: /\.styl$/
    }]
  : [{
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      test: /\.css$/
    }, {
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 2 version!stylus-loader'),
      test: /\.styl$/
    }];

  console.log(constStyleLoaders);

  var config = {
    cache: isDevelopment,
    debug: isDevelopment,
    devtool: '#cheap-module-eval-source-map',// http://webpack.github.io/docs/configuration.html#devtool
    entry: {
      app: isDevelopment ? [
        'webpack-dev-server/client?http://localhost:8888',
        // Why only-dev-server instead of dev-server:
        // https://github.com/webpack/webpack/issues/418#issuecomment-54288041
        'webpack/hot/only-dev-server',
        path.join(constants.SRC_DIR, 'client/main')
      ] : [
        './src/client/main'
      ],
      // For Safari, IE<11, and some old browsers. More languages will need more
      // specific builds.
      appintl: isDevelopment ? [
        'webpack-dev-server/client?http://localhost:8888',
        // Why only-dev-server instead of dev-server:
        // https://github.com/webpack/webpack/issues/418#issuecomment-54288041
        'webpack/hot/only-dev-server',
        path.join(constants.NODE_MODULES_DIR, 'intl/Intl.js'),
        path.join(constants.NODE_MODULES_DIR, 'intl/locale-data/jsonp/en.js'),
        path.join(constants.SRC_DIR, 'client/main.js')
      ] : [
        path.join(constants.NODE_MODULES_DIR, 'intl/Intl.js'),
        path.join(constants.NODE_MODULES_DIR, 'intl/locale-data/jsonp/en.js'),
        path.join(constants.SRC_DIR, 'client/main.js')
      ]
    },
    module: {
      loaders: [{
        loader: 'url-loader?limit=100000',
        test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg)$/
      }, {
        exclude: /node_modules/,
        loaders: isDevelopment ? [
          'react-hot', 'babel-loader'
        ] : [
          'babel-loader'
        ],
        test: /\.js$/
      }]
      .concat(constStyleLoaders)
    },
    output: isDevelopment ? {
      path: constants.BUILD_DIR,
      filename: '[name].js',
      chunkFilename: '[name]-[chunkhash].js',
      publicPath: 'http://localhost:8888/build/'
    } : {
      path: constants.BUILD_DIR,
      filename: '[name].js',
      chunkFilename: '[name]-[chunkhash].js'
    },
    plugins: (function() {
      var plugins = [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(isDevelopment ? 'development' : 'production'),
            IS_BROWSER: true
          }
        })
      ];
      if (isDevelopment)
        plugins.push(
          NotifyPlugin,
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NoErrorsPlugin()// Tell reloader to not reload if there is an error.
        );
      else
        plugins.push(
          // Render styles into separate cacheable file to prevent FOUC and optimize for critical rendering path.
          new ExtractTextPlugin('app.css', {
            allChunks: true
          }),
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.OccurenceOrderPlugin(),
          new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false// Because uglify reports so many irrelevant warnings.
            }
          })
        );
      return plugins;
    })(),
    postcss: function() {
      return [require('autoprefixer')];
    },
    resolve: {
      extensions: ['', '.js', '.json'],
      modulesDirectories: ['src', 'node_modules'],
      root: constants.ABSOLUTE_BASE,
      alias: {
        'react$': require.resolve(path.join(constants.NODE_MODULES_DIR, 'react'))
      }
    },
    stylus: {
      use: [
        poststylus(['autoprefixer'])
      ]
    }
  };

  return config;

};

  // function stylesLoaders() {
  //   return Object.keys(loaders).map(function(ext) {
  //     var prefix = 'css-loader!autoprefixer-loader?browsers=last 2 version';
  //     var extLoaders = prefix + loaders[ext];
  //     var loader = isDevelopment
  //       ? 'style-loader!' + extLoaders
  //       : ExtractTextPlugin.extract('style-loader', extLoaders);
  //     return {
  //       loader: loader,
  //       test: new RegExp('\\.(' + ext + ')$')
  //     };
  //   });
  // }

  // function stylesLoaders() {
  //   return Object.keys(loaders).map(function(ext) {
  //     var loader = isDevelopment
  //       ? `style-loader${loaders[ext]}!postcss-loader`
  //       : null;
  //       // : ExtractTextPlugin.extract('style-loader', extLoaders);
  //       return {
  //         loader: loader,
  //         // test: new RegExp('\\.(' + ext + ')$')
  //         test: new RegExp('\\.(' + ext + ')$')
  //       }
  //   });
  // }
