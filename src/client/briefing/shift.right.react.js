import * as briefingActions from './actions';
import * as missionActions from '../mission/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

class ShiftRight extends Component {
  missionShiftRight() {
    const {activemission, missions} = this.props;
    const activemissionindex = missions.indexOf(missions.find(mission => mission.get('id') === activemission.get('id')));
    missionActions.agentsAreBackFromMission();
    briefingActions.selectMission(missions.get(activemissionindex === missions.size - 1 ? 0 : activemissionindex + 1));
  }

  render() {
    return (
      <div
        id='BriefingMissionShiftRight'
        onClick={this.missionShiftRight.bind(this)}></div>
    );
  }
}

ShiftRight.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  missions: React.PropTypes.instanceOf(immutable.List)
};

export default ShiftRight;
