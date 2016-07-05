import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import LoginForm from '../auth/login.react';
import React from 'react';
import {msg} from '../intl/store';
import {Link} from 'react-router';
import immutable from 'immutable';

import GSSigil from '../app/gs.sigil.react';
import LoginMessage from '../auth/login.message.react';
import WelcomeWindow from '../dashboard/welcome.window.react';
import ABigScreen from '../introduction/a.big.screen.react';
import BackgroundMusic from '../app/background.music.react';

class Login extends Component {

  render() {
    const {jsonapi} = this.props;
    return (
      <DocumentTitle title={msg('auth.title')}>
        <div className="login-page">
          <BackgroundMusic />
          <Link to='signup'>
            <button id='LoginToSignup'>Sign Up</button>
          </Link>
          <Link to='about'>
            <button id='LoginToIntro'>Introduction</button>
          </Link>
          <GSSigil />
          <LoginMessage />
          <LoginForm {...this.props} />
          <button
            id='LoginDevNoticeButton'
            onClick={(e) => componentsActions.devNoticeToggle()}>Developers notice</button>
          <button
            id='LoginBigScreenButton'
            onClick={(e) => componentsActions.bigScreenToggle()}>Big Screen</button>
          {jsonapi.getIn(['components', 'login', 'devnotice']) &&
            <WelcomeWindow />}
          {!jsonapi.getIn(['components', 'login', 'bigscreen', 'status']) &&
            <ABigScreen
              jsonapi={jsonapi}
              />}
        </div>
      </DocumentTitle>
    );
  }

}

Login.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default Login;
