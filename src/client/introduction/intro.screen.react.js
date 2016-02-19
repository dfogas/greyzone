import './intro.screen.styl';
import React from 'react';
import Component from '../components/component.react';
import {msg} from '../intl/store';
import {FormattedHTMLMessage} from 'react-intl';

class IntroScreen extends Component {
  render() {
    return (
      <div id="IntroScreen">
        <FormattedHTMLMessage message={msg('introduction.overviewHtml')} />
      </div>
    );
  }
}


export default IntroScreen;
