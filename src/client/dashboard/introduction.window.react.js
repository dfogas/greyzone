import './introduction.window.styl'; //
import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';
import {FormattedHTMLMessage} from 'react-intl';
import $ from 'jquery';

class IntroductionWindow extends Component {
  componentDidMount() {
    // $(React.findDOMNode(this)).hide(400);
    $(React.findDOMNode(this)).hide().show(400, () => {
      $(React.findDOMNode(this)).focus();
    });
  }

  quickRead(e) {
    if (e.keyCode === 13)
      $(React.findDOMNode(this))
        .hide(400, () => {
          componentsActions.introductionWindowToggle();
          $('#LoginFormFieldEmail').focus();
        });
  }

  readMessage() {
    $(React.findDOMNode(this))
      .hide(400, () => {
        componentsActions.introductionWindowToggle();
        $('#LoginFormFieldEmail').focus();
      });
  }

  render() {
    return (
      <div
        id='IntroductionWindow'
        onKeyDown={(e) => this.quickRead(e)}
        tabIndex='2'>
        <FormattedHTMLMessage message={msg('about.message')} />
        <button
          id='ReadIntroductionWindowButton'
          onClick={this.readMessage.bind(this)}
          >{msg('introduction.button')}</button>
      </div>
    );
  }
}

export default IntroductionWindow;
