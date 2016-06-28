import './about.screen.styl';
import Component from '../components/component.react';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {msg} from '../intl/store';

class AboutMessage extends Component {
  render() {
    return (
      <div id='AboutScreen'>
        <div id='AboutMessage'>
          <FormattedHTMLMessage message={msg('about.message')} />
        </div>
      </div>
    );
  }
}

export default AboutMessage;
