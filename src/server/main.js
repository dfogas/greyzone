import api from './api';
import config from './config';
import express from 'express';
import frontend from './frontend';
import morgan from 'morgan';
import {Server} from 'http';

const app = express();
const server = Server(app);

// Load API.
app.use(config.apipath, api);

if (!config.isProduction)
  app.use(morgan('dev'));

// Load react-js frontend. i.e. rendering logic
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
