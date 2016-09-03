import './signup.message.styl'; //
import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {msg} from '../intl/store';
import $ from 'jquery';

class SignupMessage extends Component {
  componentDidMount() {
    $(React.findDOMNode(this)).animate({opacity: 1}, 400, () => {});
  }

  render() {
    return (
      <div id='SignupMessage'>
        <FormattedHTMLMessage message={msg('signup.message')} />
        {true &&
          <div
            id='SignupToLogin'
            onClick={(e) => componentsActions.loginSignupToggle()}>To Login
          </div>
        }
      </div>
    );
  }
}

export default SignupMessage;
