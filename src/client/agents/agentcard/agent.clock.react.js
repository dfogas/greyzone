/*
  Dumb Component
  it has to display the agent's ETA, which conveys how is agent able to conduct
  missions, if there's ETA left agent is not able to conduct mission.
*/
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';

class AgentClock extends Component {
  render() {
    const {ETA, agent} = this.props;
    const ETAtime = ETA - Date.now() > 0 ? ETA - Date.now() : 0;
    return (
      <div className='agent-eta-clock'>
        {ETAtime &&
          (ETAtime / 60*60*1000) + ':' (ETAtime % (60*60*1000) / 60*1000)}
      </div>
    );
  }
}

AgentClock.propTypes = {
  ETA: React.PropTypes.number
};

export default AgentClock;
