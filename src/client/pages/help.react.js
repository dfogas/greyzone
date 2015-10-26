import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';

import DocumentTitle from 'react-document-title';
import HelpScreen from '../help/helpscreen.react';

class HelpPage extends Component {

  render() {
    return (
      <DocumentTitle title={msg('help.title')}>
        <HelpScreen />
      </DocumentTitle>
    );
  }
}

HelpPage.propTypes = {};

export default HelpPage;
