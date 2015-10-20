// import favicon from 'serve-favicon';
import compression from 'compression';
import config from '../config';
import esteHeaders from '../lib/estemiddleware';
import express from 'express';
import favicon from 'serve-favicon';
import render from './render';
import userState from './userState';

const app = express(); //frontend subapp?

// Add Este.js headers for React related routes only
if (!config.isProduction)
  app.use(esteHeaders());

app.use(compression());
app.use(favicon('assets/img/favicon.ico'));
// TODO: Move to CDN.
app.use('/build', express.static('build'));
app.use('/assets', express.static('assets'));
app.use(userState());

app.get('*', (req, res, next) => {
  // console.log('iterable _state is:',immutable.Iterable.isIterable(state.appState._state));
  // console.log('viewer from frontend is:', state.appState._state.get('users').get('viewer'));
  render(req, res, req.userState).catch(next);
});

app.on('mount', () => {
  console.log('App is available at %s', app.mountpath);
});

export default app;
