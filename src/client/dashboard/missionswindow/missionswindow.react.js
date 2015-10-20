import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';

import * as actions from '../actions';
import MissionCard from '../../mission/missioncard/missioncard.react';
import {list as MissionsList} from '../../lib/missions';
import randomint from '../../lib/getrandomint';

class MissionsWindow extends Component {
  acceptMission() {
    var randommissionindex = randomint(0, MissionsList.length);
    actions.acceptMission(immutable.fromJS(MissionsList[randommissionindex]));
  }

  confirmMissionAccept() {
    const {missiontoaccept} = this.props;
    actions.confirmmissionaccept(missiontoaccept);
  }

  render() {
    const {missiontoaccept} = this.props;
    return (
      <div id='MissionsWindow'>
        <input onClick={this.acceptMission} type='button' value='Mission Impossible' />
        <br />
        {!!missiontoaccept &&
          <MissionCard
            isBriefing={true}
            mission={missiontoaccept}
            />}
        <br />
        {!!missiontoaccept &&
          <input onClick={this.confirmMissionAccept.bind(this)} type='button' value='Confirm Mission Accept'/>}
      </div>
    );
  }

}

MissionsWindow.propTypes = {
  missiontoaccept: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionsWindow;
