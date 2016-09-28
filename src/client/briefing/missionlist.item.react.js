import * as briefingActions from './actions';
import * as componentsActions from '../components/actions';
import * as missionActions from '../mission/actions';
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
    const {jsonapi, mission} = this.props;
    missionActions.agentsAreBackFromMission();
    briefingActions.selectMission(mission);
    if (!jsonapi.getIn(['components', 'briefing', 'activemission', 'toggle']))
      componentsActions.activeMissionToggle();
  }

  render() {
    const {isSelected, jsonapi, mission} = this.props;
    const isPresent = mission.get('inCountry') === jsonapi.getIn(['dashboard', 'countryofoperation']);
    return (
      <tr className={isSelected ? 'selected' : ''}>
        <td onClick={this.selectMission.bind(this)}>{mission.get('title')}</td>
        <td>{`${mission.get('inCountry')}${isPresent ? '*' : ''}`}</td>
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
        <td>
          {mission.get('forcefail') ? 'forced' : 'none'}
        </td>
      </tr>
    );
  }
}

MissionListItem.propTypes = {
  isSelected: React.PropTypes.bool,
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  mission: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionListItem;
