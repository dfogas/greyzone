import Component from '../components/component.react.js';
import React from 'react';
import {msg} from '../intl/store';
import {FormattedHTMLMessage} from 'react-intl';

class HelpTerminology extends Component {
  render() {
    return (
      <div className='help-terminology'>
        <FormattedHTMLMessage message={msg('help.terminologyHtml')} />{' '}
      </div>
    );
  }
}

HelpTerminology.propTypes = {

};

export default HelpTerminology;
