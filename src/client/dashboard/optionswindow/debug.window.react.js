import './debug.window.styl';
import * as dashboardActions from '../actions';
import * as missionActions from '../../mission/actions';
import Component from '../../components/component.react';
import React from 'react';

class DebugWindow extends Component {
  sanitize() {
    dashboardActions.sanitizeAgents();
    dashboardActions.sanitizeMissions();
    dashboardActions.sanitizeDashboardPointer();
  }

  setDefaultMission() {
    missionActions.agentIsBackFromTask(); // necessary, else agent is lost
    missionActions.agentsAreBackFromMission();
    missionActions.setDefault();
  }

  render() {
    const {debug} = this.props;

    return (
      <div id='DebugWindow'>
        {debug && <button
          id='SanitizeStateButton'
          onClick={this.sanitize}>
          Sanitize State
        </button>}
        {debug &&
          <button
            id='SetDefaultMissionButton'
            onClick={this.setDefaultMission}
          >Set Default Mission</button>}
      </div>
    );
  }
}

DebugWindow.propTypes = {
  debug: React.PropTypes.bool
};

export default DebugWindow;
