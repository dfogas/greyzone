import App from './app/app.react';
import Home from './pages/home.react';
import Login from './pages/login.react';
import NotFound from './pages/notfound.react';
import React from 'react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

// that's mine
import Armory from './pages/armory.react';
import Briefing from './pages/briefing.react';
import Command from './pages/command.react';
import Contest from './pages/contest.react';
import Countries from './pages/countries.react';
import Dashboard from './pages/dashboard.react';
import Mission from './pages/mission.react';
import SignUp from './pages/signup.react';

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Command} name="command" />
    <NotFoundRoute handler={NotFound} name="not-found" />
    <Route handler={Home} name="home" />
    <Route handler={Login} name="login" />
    <Route handler={Armory} name="armory" />
    <Route handler={Briefing} name="briefing" />
    <Route handler={Contest} name="contest" />
    <Route handler={Countries} name="countries" />
    <Route handler={Dashboard} name="dashboard" />
    <Route handler={Mission} name="mission" />
    <Route handler={SignUp} name="signup" />
  </Route>
);
