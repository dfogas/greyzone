import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import SignUpForm from '../auth/signup.react';
import React from 'react';
import {msg} from '../intl/store';
import {Link} from 'react-router';

import SignupMessage from '../auth/signup.message.react';

class SignUp extends Component {

  render() {
    return (
      <DocumentTitle title={msg('auth.signup.title')}>
        <div className="signup-page">
          <Link to='login'><button id='SignupToLogin'>Back To Login</button></Link>
          <SignupMessage />
          <SignUpForm {...this.props} />
        </div>
      </DocumentTitle>
    );
  }

}

export default SignUp;
