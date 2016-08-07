import './introduction.window.styl';
import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';
import {FormattedHTMLMessage} from 'react-intl';

class IntroductionWindow extends Component {
  render() {
    return (
      <div
        id='IntroductionWindow'
        onClick={(e) => componentsActions.introductionWindowToggle()}><FormattedHTMLMessage message={msg('about.message')} /></div>
    );
  }
}

export default IntroductionWindow;
