import './helpscreen.styl';
import Component from '../components/component.react';
import React from 'react';
import GeminiScrollbar from 'react-gemini-scrollbar';

import HelpGameSegments from './segments.react';
import HelpTerminology from './terminology.react';
import HelpMissionProgress from './progress.react';
import HelpMissionActions from './actions.react';
import HelpEquipments from './equipments.react';

class HelpPage extends Component {

  render() {
    return (
      <div id='HelpScreen'>
        <div className='help-content'>
            <GeminiScrollbar>
            <HelpGameSegments
              />
            <HelpTerminology
              />
            <HelpMissionProgress
              />
            <HelpMissionActions
              />
            <HelpEquipments
              />
          </GeminiScrollbar>
        </div>
      </div>
    );
  }
}

HelpPage.propTypes = {};

export default HelpPage;
