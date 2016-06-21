import './welcome.window.styl';
import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';
import {FormattedHTMLMessage} from '../intl/store';
import $ from 'jquery';

class WelcomeWindow extends Component {
  componentDidMount() {
    $(React.findDOMNode(this)).focus();
  }

  quickRead(e) {
    if (e.keyCode === 13)
      $(React.findDOMNode(this))
        .hide(400, () => {
          componentsActions.devNoticeToggle();
          $('#LoginFormFieldEmail').focus();
        });
  }

  readMessage() {
    $(React.findDOMNode(this))
      .hide(400, () => {
        componentsActions.devNoticeToggle();
        $('#LoginFormFieldEmail').focus();
      });
  }

  render() {
    return (
      <div
        id='WelcomeWindow'
        onKeyDown={(e) => this.quickRead(e)}
        tabIndex='0'
        >
        <FormattedHTMLMessage message={msg('developers.notice')} />
        <button
          id='ReadDevelopersNoticeButton'
          onClick={this.readMessage.bind(this)}
          >{msg('developers.button')}</button>
      </div>
    );
  }
}

WelcomeWindow.propTypes = {

};

export default WelcomeWindow;
