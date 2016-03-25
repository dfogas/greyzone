import * as missionActions from '../mission/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

import MissionClock from './mission.clock.react';

class MissionListItem extends Component {
  missionPass() {
    const {mission} = this.props;
    console.log(mission.toJS());
    missionActions.passOnMission(mission);
  }

  selectMission() {
    const {mission} = this.props;
    missionActions.select(mission);
  }

  render() {
    const {mission} = this.props;
    return (
      <tr
        onClick={this.selectMission.bind(this)}
        >
        <td>{mission.get('title')}</td>
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
              >Pass
            </button>
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
