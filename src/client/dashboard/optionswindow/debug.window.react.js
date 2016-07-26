import './debug.window.styl';
import * as optionsActions from './actions';
import * as missionActions from '../../mission/actions';
import Component from '../../components/component.react';
import React from 'react';
import {Link} from 'react-router';

class DebugWindow extends Component {
  sanitize(e) {
    e.preventDefault();
    optionsActions.sanitizeAgents(); // checks for null or undefined
    optionsActions.sanitizeMissions(); // check for null or undefined
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
            Heal Agents&Missions
          </button>}
          {debug &&
            <button
              id='SetDefaultMissionButton'
              onClick={this.setDefaultMission}
            >Set Default Mission</button>}
          {debug &&
            <Link to='lab'><button id='DashboardDebugOptionsToLab'>To Lab</button></Link>}
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
