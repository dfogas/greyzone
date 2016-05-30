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

class Login extends Component {

  render() {
    const {jsonapi} = this.props;
    return (
      <DocumentTitle title={msg('auth.title')}>
        <div className="login-page">
          <Link to='signup'>
            <button id='LoginToSignup'>Sign Up</button>
          </Link>
          <Link to='intro'>
            <button id='LoginToIntro'>About</button>
          </Link>
          <GSSigil />
          <LoginMessage />
          <LoginForm {...this.props} />
          {jsonapi.getIn(['components', 'login', 'devnotice']) &&
            <WelcomeWindow />}
        </div>
      </DocumentTitle>
    );
  }

}

Login.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default Login;
