/*
  server/api/index.js
*/
import bodyParser from 'body-parser';
import config from '../config';
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import mongoose from 'mongoose';
import morgan from 'morgan';
import path from 'path';
import passport from 'passport';

// controllers
import auth from './controllers/auth';
import contest from './controllers/contest';
import player from './controllers/player';
import user from './controllers/user';

// Create general-purpose API sub-app
const app = express();

mongoose.connect(config.datastorage, function(err, res) {
  if (err)
    console.log('Error connecting to database.' + err);
  else
    console.log('Connected to database: ' + config.datastorage);
}); // establish database Mongo connection


// Create a read stream, in append mode
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '/access.log'),
  {flags: 'a'} // adding to file
);

app.use(bodyParser.json({limit: '1000kb'}));
app.use(bodyParser.urlencoded({extended: true}));
if (!config.isProduction)
  app.use(morgan('combined', {stream: accessLogStream}));
app.use(passport.initialize());

app.use(cors()); // what does it do?

// route index(es)
app.use('/auth', auth);
app.use('/contest', contest);
app.use('/users', user);
app.use('/players', player);

app.on('mount', () => {
  console.log('Api is available at %s', app.mountpath);
});

export default app;
