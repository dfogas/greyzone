import Component from '../components/component.react';
import React from 'react';

import DocumentTitle from 'react-document-title';
import HelpOverview from './overview.react';
import HelpGameSegments from './segments.react';
import HelpTerminology from './terminology.react';
import HelpMissionProgress from './progress.react';
import HelpMissionActions from './actions.react';

class HelpPage extends Component {

  render() {
    return (
      <div className='help-screen'>
        <HelpOverview
          />
        <hr />
        <HelpGameSegments
          />
        <hr />
        <HelpTerminology
          />
        <hr />
        <HelpMissionProgress
          />
        <hr />
        <HelpMissionActions
          />
      </div>
    );
  }
}

HelpPage.propTypes = {};

export default HelpPage;
