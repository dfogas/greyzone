import './debug.window.styl';
import * as dashboardActions from '../actions';
import * as missionActions from '../../mission/actions';
import Component from '../../components/component.react';
import React from 'react';

class DebugWindow extends Component {
  sanitize(e) {
    e.preventDefault();
    dashboardActions.sanitizeAgents(); // checks for null or undefined
    dashboardActions.sanitizeMissions(); // check for null or undefined
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
        <form>
          <fieldset>
            <legend>Debug Window</legend>
          {debug && <button
            id='SanitizeStateButton'
            onClick={(e) => this.sanitize(e)}>
            Sanitize Agents&Missions
          </button>}
          {debug &&
            <button
              id='SetDefaultMissionButton'
              onClick={this.setDefaultMission}
            >Set Default Mission</button>}
          </fieldset>
        </form>
      </div>
    );
  }
}

DebugWindow.propTypes = {
  debug: React.PropTypes.bool
};

export default DebugWindow;
