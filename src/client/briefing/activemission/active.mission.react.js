/* Dumb Component */
import './active.mission.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import ActualMissionCard from './actual.missioncard.react';

class ActiveMission extends Component {
  render() {
    const {activemission, agents, components} = this.props;

    return (
      <div className='active-mission'>
        <ActualMissionCard
          activemission={activemission}
          agents={agents}
          components={components}
          isActual={true}
          />
      </div>
    );
  }
}

ActiveMission.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List),
  components: React.PropTypes.instanceOf(immutable.Map)
};

export default ActiveMission;
