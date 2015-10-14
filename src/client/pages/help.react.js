import '../help/help.css';
import Component from '../components/component.react';
import React from 'react';

import DocumentTitle from 'react-document-title';
import HelpOverview from '../help/overview.react';
import HelpGameSegments from '../help/segments.react';
import HelpTerminology from '../help/terminology.react';
import HelpMissionProgress from '../help/progress.react';
import HelpMissionActions from '../help/actions.react';

class HelpPage extends Component {
  render() {
    return (
      <DocumentTitle>
        <div className='help-page'>
          <HelpOverview />
          <hr />
          <HelpGameSegments />
          <hr />
          <HelpTerminology />
          <hr />
          <HelpMissionProgress />
          <hr />
          <HelpMissionActions />
        </div>
      </DocumentTitle>
    );
  }
}

HelpPage.propTypes = {

};

export default HelpPage;
