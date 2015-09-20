import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

import AgentCard from '../agents/agentcard.react.js';

import trainingtable from '../lib/trainingtable';

class AgentForTraining extends Component {

  render() {
    const {agentfortraining, agentfortrainingindex} = this.props;

    return (
      <div id='AgentForTraining'>
        Agent for Training
        <br />
        <AgentCard
          agent={agentfortraining}
          agentindex={agentfortrainingindex}
          />
        Click skill to raise it: {agentfortraining.get('randomSkill') + ' pt(s)'}
      </div>
    );
  }
}

AgentForTraining.propTypes = {
  agentfortraining: React.PropTypes.instanceOf(immutable.Map).isRequired,
  agentfortrainingindex: React.PropTypes.number
};

export default AgentForTraining;
