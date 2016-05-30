import * as briefingActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

class ShiftLeft extends Component {
  missionShiftLeft() {
    const {activemission, missions} = this.props;
    const activemissionindex = missions.indexOf(missions.find(mission => mission.get('id') === activemission.get('id')));
    briefingActions.selectMission(missions.get(activemissionindex === 0 ? missions.size - 1 : activemissionindex - 1));
  }

  render() {
    return (
      <div
        id='BriefingMissionShiftLeft'
        onClick={this.missionShiftLeft.bind(this)}></div>
    );
  }
}

ShiftLeft.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  missions: React.PropTypes.instanceOf(immutable.List)
};

export default ShiftLeft;
