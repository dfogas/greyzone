import './signup.message.styl';
import Component from '../components/component.react';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {msg} from '../intl/store';

class SignupMessage extends Component {
  render() {
    return (
      <div id='SignupMessage'>
        <FormattedHTMLMessage message={msg('signup.message')} />
      </div>
    );
  }
}

export default SignupMessage;
