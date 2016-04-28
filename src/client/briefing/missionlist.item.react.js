import * as missionActions from '../mission/actions';
import * as briefingActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

import MissionClock from './mission.clock.react';

class MissionListItem extends Component {
  missionPass() {
    const {mission} = this.props;
    missionActions.agentsAreBackFromMission();
    briefingActions.passMission(mission);
    missionActions.setDefault();
  }

  selectMission() {
    const {mission} = this.props;
    missionActions.agentsAreBackFromMission();
    briefingActions.selectMission(mission);
  }

  render() {
    const {mission} = this.props;
    return (
      <tr>
        <td onClick={this.selectMission.bind(this)}>{mission.get('title')}</td>
        <td>{mission.get('inCountry')}</td>
        <td>{mission.get('tier')}</td>
        <td>
          <MissionClock
            mission={mission}
            />
        </td>
        <td>
          {
            <button
              className='mission-pass'
              onClick={this.missionPass.bind(this)}
              >Pass</button>
          }
        </td>
      </tr>
    );
  }
}

MissionListItem.propTypes = {
  mission: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionListItem;
