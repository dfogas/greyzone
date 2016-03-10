import api from './api';
import config from './config';
import express from 'express';
import frontend from './frontend';
import morgan from 'morgan';
import {Server} from 'http';

const app = express();
const server = Server(app);

app.use(config.apipath, api);

if (!config.isProduction)
  app.use(morgan('dev'));

app.get('/zohoverify/verifyforzoho.html', (req, res) => {
  res.send('1454573815244');
});

// console.log(process.env.NODE_ENV);

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
