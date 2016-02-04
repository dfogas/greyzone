/*
  Dumb Component
  it has to display the agent's ETA, which conveys how is agent able to conduct
  missions, if there's ETA left agent is not able to conduct mission.
*/
import './agent.clock.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
// import {msg} from '../../intl/store';

class AgentClock extends Component {
  render() {
    const {agent} = this.props;
    const ETAtime = (agent.get('ETA') - Date.now()) > 0 ? (agent.get('ETA') - Date.now()) : 0;
    const hours = Math.floor(ETAtime / (60 * 60 * 1000));
    const minutes = Math.floor((ETAtime % (60 * 60 * 1000) / (60 * 1000)));
    return (
      <div className='agent-eta-clock'>
        {ETAtime === 0 ? 'Ready' :
          hours + ':' + Math.floor(minutes / 10) + '' + (minutes % 10)}
      </div>
    );
  }
}

AgentClock.propTypes = {
  agent: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentClock;
