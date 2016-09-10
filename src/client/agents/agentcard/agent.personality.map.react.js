import './agent.personality.map.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import prop from '../../lib/general/r.i.prop';

class AgentPersonalityMap extends Component {
  render() {
    const {agent} = this.props;
    return (
      <div className='agent-personality-map'>
        {prop('personality', agent)}
      </div>
    );
  }
}

AgentPersonalityMap.propTypes = {
  agent: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentPersonalityMap;
