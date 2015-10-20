import './activemission.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import ActualMissionCard from './actualmissioncard.react';

class ActiveMission extends Component {
  render() {
    const {activemission, agents} = this.props;

    return (
      <div className='active-mission'>
        <ActualMissionCard
          activemission={activemission}
          agents={agents}
          isActual={true}
          />
      </div>
    );
  }
}

ActiveMission.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List)
};

export default ActiveMission;
