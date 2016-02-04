import './login.message.styl';
import Component from '../components/component.react';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {msg} from '../intl/store';

class LoginMessage extends Component {
  render() {
    return (
      <div id='LoginMessage'>
        <FormattedHTMLMessage message={msg('login.message')} />
      </div>
    );
  }
}

export default LoginMessage;
