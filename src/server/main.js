import api from './api';
import config from './config';
import express from 'express';
import frontend from './frontend';
import morgan from 'morgan';
// import {Server} from 'https';
import {Server} from 'http';
// import fs from 'fs';
import ioServer from 'socket.io';
import Mission from './lib/greyzone/mission.generator';
import checkDiscovered from './lib/greyzone/checkdiscovered';

// related to SSH certificate
// const gscert = fs.readFileSync('1508390/www.ghoststruggle.com.cer');
// const gskey = fs.readFileSync('1508390/www.ghoststruggle.com.key');
// const gsca = fs.readFileSync('1508390/Intermediate_CA_chain.cer');
//
// const options = {
//   key: gskey,
//   cert: gscert
//   ca: gsca,
//   requestCert: false,
//   rejectUnauthorized: false
// };

const app = express();
// const server = process.env.NODE_ENV === 'development' ? Server(app) : secureServer(options, app);
// const server = Server(options, app); https Server
const server = Server(app);
const io = ioServer(server);

app.use(config.apipath, api);

io.on('connection', (socket) => {
  console.log('user has connected');
  socket.on('mission', function(msg) {
    if (msg.missiontitle !== 'Discovered!' && Math.random() > 0.5) {
      console.log('Agents spotted. New Mission in Briefing room - Discovered!');
      socket.emit('new mission', Mission('Discovered!', 3, 10 * 60 * 1000, true));
    }
  });

  // setInterval(() => {checkDiscovered(socket); }, 10 * 60 * 1000);
});


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
export default app;
