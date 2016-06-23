import api from './api';
import config from './config';
import express from 'express';
import frontend from './frontend';
import morgan from 'morgan';
import https from 'https';
import http from 'http';
import Mission from './lib/greyzone/mission.generator';
import fs from 'fs';
// import ioServer from 'socket.io';
// import checkDiscovered from './lib/greyzone/checkdiscovered';

// related to SSH certificate
const gscert = fs.readFileSync('1508390/www.ghoststruggle.com.cer');
const gskey = fs.readFileSync('1508390/gs.key');
const gsca = fs.readFileSync('1508390/Intermediate_CA_chain.cer');
//
const options = {
  key: gskey,
  cert: gscert,
  ca: gsca,
  // requestCert: false,
  // rejectUnauthorized: false
};

const app = express();

app.use(config.apipath, api);

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

// production fork
const server = process.env.NODE_ENV === 'production' ? https.createServer(options, app) : http.createServer(app); // can't test production before deployment, anyway, beat it
// const server = http.createServer(app);
// const io = ioServer(server);
//
// io.on('connection', (socket) => {
//   console.log('user has connected');
//   socket.on('mission', function(msg) {
//
//     if (msg.title !== 'Discovered!' && Math.random() > 0.5) {
//       console.log('Agents spotted. New Mission in Briefing room - Discovered!');
//       let mission = Mission('Discovered!', 3, 10 * 60 * 1000, true);
//       mission.inCountry = msg.inCountry;
//       socket.emit('new mission', mission);
//     }
//   });
//
//   // setInterval(() => {checkDiscovered(socket); }, 10 * 60 * 1000);
// });

// ..aAand running server
server.listen(config.port, () => {
  console.log('Server started at port %s', config.port);
  // TODO: přidat check na https server
});

// necessity for server API test hook
export default app;
