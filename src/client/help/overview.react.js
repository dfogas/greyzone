import Component from '../components/component.react.js';
import React from 'react';
import {msg} from '../intl/store';
import {FormattedHTMLMessage} from 'react-intl';

class HelpOverview extends Component {
  render() {
    return (
      <div className='help-overview'>
        <FormattedHTMLMessage message={msg('help.overviewHtml')} />{' '}
      </div>
    );
  }
}

HelpOverview.propTypes = {

};

export default HelpOverview;
