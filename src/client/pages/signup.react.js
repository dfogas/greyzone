import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import SignUpForm from '../auth/signup.react';
import React from 'react';
import {msg} from '../intl/store';

import SignupMessage from '../auth/signup.message.react';

class SignUp extends Component {

  render() {
    return (
      <DocumentTitle title={msg('auth.signup.title')}>
        <div className="signup-page">
          <SignupMessage />
          <SignUpForm {...this.props} />
        </div>
      </DocumentTitle>
    );
  }

}

export default SignUp;
