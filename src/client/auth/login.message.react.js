import './login.message.styl';
import Component from '../components/component.react';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {msg} from '../intl/store';
import {Link} from 'react-router';

class LoginMessage extends Component {
  render() {
    return (
      <div id='LoginMessage'>
        <FormattedHTMLMessage message={msg('login.message')} />
        <Link to='signup'>
          <button id='LoginToSignup'>Sign Up</button>
        </Link>
      </div>
    );
  }
}

export default LoginMessage;
