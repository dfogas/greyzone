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
import Introduction from './pages/introduction.react';
import Mission from './pages/mission.react';
import SignUp from './pages/signup.react';
import Lab from './pages/lab.react';
import Support from './pages/support.react';
import LPRecover from './pages/lprecover.react';
import Reauthentication from './pages/reauthentication.react';
import SignupComplete from './pages/signup.complete.react';
import Payments from './pages/payment.react';

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Dashboard} name="dashboard" />
    <NotFoundRoute handler={NotFound} name="not-found" />
    <Route handler={Login} name="login" />
    <Route handler={Armory} name="armory" />
    <Route handler={Briefing} name="briefing" />
    <Route handler={Command} name="command" />
    <Route handler={Introduction} name="help" />
    <Route handler={Introduction} name="intro" />
    <Route handler={Mission} name="mission" />
    <Route handler={SignUp} name="signup" />
    <Route handler={Lab} name="lab" />
    <Route handler={Reauthentication} name="reauthenticate" />
    <Route handler={LPRecover} name="lprecover" />
    <Route handler={SignupComplete} name="signup/complete" />
    <Route handler={Support} name="support" />
    <Route handler={Support} name="forum" />
    <Route handler={Payments} name="payments" />
  </Route>
);
