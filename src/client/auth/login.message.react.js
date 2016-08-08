import './login.message.styl';
import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {msg} from '../intl/store';
import $ from 'jquery';

class LoginMessage extends Component {
  componentDidMount() {
    $(React.findDOMNode(this)).animate({opacity: 1}, 400, () => {});
  }

  render() {
    return (
      <div id='LoginMessage'>
        <FormattedHTMLMessage message={msg('login.message')} />
        <button
          id='LoginToSignup'
          onClick={(e) => componentsActions.loginSignupToggle()}>{msg('menu.signup')}</button>
      </div>
    );
  }
}

export default LoginMessage;
