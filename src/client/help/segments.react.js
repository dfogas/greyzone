import Component from '../components/component.react.js';
import React from 'react';
import {msg} from '../intl/store';
import {FormattedHTMLMessage} from 'react-intl';

class HelpGameSegments extends Component {
  render() {
    return (
      <div className='help-game-segments'>
        <FormattedHTMLMessage message={msg('help.segmentsHtml')} />{' '}
      </div>
    );
  }
}

HelpGameSegments.propTypes = {

};

export default HelpGameSegments;
