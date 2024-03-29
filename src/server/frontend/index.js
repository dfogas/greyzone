import compression from 'compression';
import config from '../config';
import esteHeaders from '../lib/estemiddleware';
import express from 'express';
import favicon from 'serve-favicon';
var render;
import userState from './userState';

if (process.env.NODE_ENV)
  render = require('./render');
const app = express(); //frontend subapp?

if (process.env.NODE_ENV) {
  // Add Este.js headers for React related routes only
  if (!config.isProduction || !config.isStaging)
    app.use(esteHeaders());

  app.use(compression());
  app.use(favicon('assets/img/favicon.ico'));
  // TODO: Move assets to CDN.
  app.use('/build', express.static('build'));
  app.use('/assets', express.static('assets'));
  app.use(userState());

  app.get('*', (req, res, next) => {
    // is place for session here? No - no, it is not
    render(req, res, req.userState).catch(next);
  });

  app.on('mount', () => {
    console.log('App is available at %s', app.mountpath);
  });
}


export default app;
