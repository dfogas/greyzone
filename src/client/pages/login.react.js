import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {msg} from '../intl/store';
import immutable from 'immutable';

import GSSigil from '../app/gs.sigil.react';
import LoginForm from '../auth/login.react';
import LoginMessage from '../auth/login.message.react';
import SignupForm from '../auth/signup.react';
import SignupMessage from '../auth/signup.message.react';
import WelcomeWindow from '../dashboard/welcome.window.react';
import IntroductionWindow from '../dashboard/introduction.window.react';
import ABigScreen from '../introduction/a.big.screen.react';
import BackgroundMusic from '../app/background.music.react';

class Login extends Component {

  render() {
    const {jsonapi} = this.props;
    const signupToggle = jsonapi.getIn(['components', 'login', 'signup']);
    const introWindowToggle = jsonapi.getIn(['components', 'login', 'introductionwindow']);
    const devNoticeToggle = jsonapi.getIn(['components', 'login', 'devnotice']);
    return (
      <DocumentTitle title={msg('auth.title')}>
        <div className="login-page">
          <button
            id='LoginToIntro'
            onClick={(e) => componentsActions.introductionWindowToggle()}>Introduction</button>
          <GSSigil />
          <BackgroundMusic />
          {(!signupToggle && !introWindowToggle && !devNoticeToggle) &&
            <LoginMessage />}
          {(!signupToggle && !introWindowToggle && !devNoticeToggle) &&
            <LoginForm {...this.props} />}
          {(signupToggle && !devNoticeToggle && !introWindowToggle) &&
            <SignupMessage />}
          {(signupToggle && !devNoticeToggle && !introWindowToggle) &&
            <SignupForm {...this.props} />}
          <button
            id='LoginDevNoticeButton'
            onClick={(e) => componentsActions.devNoticeToggle()}>Developers notice</button>
          {false &&
            <button
              id='LoginBigScreenButton'
              onClick={(e) => componentsActions.bigScreenToggle()}>Big Screen</button>}
          {devNoticeToggle &&
            <WelcomeWindow />}
          {introWindowToggle &&
            <IntroductionWindow />}
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
