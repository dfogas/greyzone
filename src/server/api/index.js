import bodyParser from 'body-parser';
import config from '../config';
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import mongoose from 'mongoose';
import morgan from 'morgan';
import path from 'path';

import passport from 'passport';
// import cookieParser from 'cookie-parser';
// import session from 'express-session';

// controllers
import auth from './controllers/auth';
import player from './controllers/player';
import user from './controllers/user';

mongoose.connect(config.datastorage); // establish database Mongo connection

// Create general-purpose API sub-app
const app = express();

// Create a read stream, in append mode
let accessLogStream = fs.createWriteStream(path.join(__dirname, '/access.log'), {flags: 'a'});

// authentication and session middleware
// app.use(cookieParser('keyboard cat'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(session(config.sessionOptions));
if (!config.isProduction)
  app.use(morgan('combined', {stream: accessLogStream}));
app.use(passport.initialize());
// app.use(passport.session());

app.use(cors()); // what does it do?

// route index(es)
app.use('/auth', auth);
app.use('/users', user);
app.use('/players', player);

app.on('mount', () => {
  console.log('Api is available at %s', app.mountpath);
});

export default app;
