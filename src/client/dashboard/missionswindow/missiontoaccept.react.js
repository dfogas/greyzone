import './missiontoaccept.styl';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';

import MissionCard from '../../mission/missioncard/missioncard.react';

class MissionToAccept extends Component {
  render() {
    const {missiontoaccept} = this.props;
    return (
      <div className='mission-to-accept'>
        {missiontoaccept ?
          <MissionCard
            isBriefing={true}
            mission={missiontoaccept}
            /> : <div className='no-mission-to-accept'>
            {"There is currently no mission to accept."}</div>
          }
      </div>
    );
  }
}

MissionToAccept.propTypes = {
  missiontoaccept: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionToAccept;
