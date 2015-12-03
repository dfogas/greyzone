import App from './app/app.react';
import Login from './pages/login.react';
import NotFound from './pages/notfound.react';
import React from 'react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

// that's mine
import Armory from './pages/armory.react';
import Briefing from './pages/briefing.react';
import Command from './pages/command.react';
import Dashboard from './pages/dashboard.react';
import Help from './pages/help.react';
import Mission from './pages/mission.react';
import SignUp from './pages/signup.react';
import Lab from './pages/lab.react';
import Support from './pages/support.react';
import UverKalk from './pages/uverkalk.react.js';

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Command} name="command" />
    <NotFoundRoute handler={NotFound} name="not-found" />
    <Route handler={Login} name="login" />
    <Route handler={Armory} name="armory" />
    <Route handler={Briefing} name="briefing" />
    <Route handler={Dashboard} name="dashboard" />
    <Route handler={Help} name="help" />
    <Route handler={Mission} name="mission" />
    <Route handler={SignUp} name="signup" />
    <Route handler={Lab} name="lab" />
    <Route handler={Support} name="support" />
    <Route handler={Support} name="forum" />
    <Route handler={UverKalk} name="uverkalk" />
  </Route>
);
