import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import LoginForm from '../auth/login.react';
import React from 'react';
import {msg} from '../intl/store';
import {Link} from 'react-router';

import LoginMessage from '../auth/login.message.react';

class Login extends Component {

  render() {
    return (
      <DocumentTitle title={msg('auth.title')}>
        <div className="login-page">
          <Link to='signup'><button id='LoginToSignup'>Sign Up</button></Link>
          <Link to='intro'><button id='LoginToIntro'>About</button></Link>
          <LoginMessage />
          <LoginForm {...this.props} />
        </div>
      </DocumentTitle>
    );
  }

}

export default Login;
