import api from './api';
import config from './config';
import express from 'express';
import frontend from './frontend';
import morgan from 'morgan';
import {secureServer} from 'https';
import {Server} from 'http';
import fs from 'fs';

const gscert = fs.readFileSync('1508390/www.ghoststruggle.com.cer');
const gskey = fs.readFileSync('1508390/www.ghoststruggle.com.key');

const options = {
  key: gskey,
  cert: gscert
};

const app = express();
const server = process.env.NODE_ENV === 'development' ? Server(app) : secureServer(options, app);

app.use(config.apipath, api);

if (!config.isProduction)
  app.use(morgan('dev'));

// Load react-js frontend. i.e. rendering logic, eats everything
if (process.env.NODE_ENV)
  // frontend is not needed when we test server REST api
  app.use(frontend);

// Add error handler. Four arguments need to be defined in order for the
// middleware to act as an error handler.
app.use((err, req, res, next) => {
  const msg = err.stack || err;
  console.log('Yay', msg);
  res.status(500).send('500: ' + msg);
});

// ..aAand running server
server.listen(config.port, () => {
  console.log('Server started at port %s', config.port);
});

// necessity for server API test hook
module.exports = app;
