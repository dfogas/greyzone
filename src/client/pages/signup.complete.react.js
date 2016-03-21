import '../auth/signup.complete.styl';
import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {msg} from '../intl/store';
import {Link} from 'react-router';

class SignUpComplete extends Component {

  render() {
    return (
      <DocumentTitle title={msg('auth.signup.complete')}>
        <div className="signup-page">
          <Link to='login'><button id='SignupToLogin'>Back To Login</button></Link>
          <div id='SignUpRedirectMessage'>
            If you are here, you have been sent an activation message for your account.
            <br />
            Go to your mailbox and confirm it.
            After that your account will be activated.
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default SignUpComplete;
