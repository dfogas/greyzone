/* eslint curly: 1 */
import api from './api'; //
import auth from './api/controllers/auth';
import paypal from './paypal';
import config from './config';
import express from 'express';
import frontend from './frontend';
import morgan from 'morgan';
import http from 'http';
import ioServer from 'socket.io';
import multiplayer from './multiplayer';

const app = express();

// https redirection for heroku
if (config.isProduction)
  app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https')
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
    return next();
  });

app.use('/', paypal);
app.use(config.apipath, api);
app.use('/', auth);

app.use(morgan('dev')); // development logger TODO: take care of production

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

const server = http.createServer(app);
const io = ioServer(server);

io.sockets.on('connection', multiplayer);

// ..aAand running server
server.listen(config.port, () => {
  console.log('Server started at port %s', config.port);
});

// necessity for server API test hook
export default app;
