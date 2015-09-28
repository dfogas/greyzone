import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import randomint from '../lib/getrandomint';

import AgentCard from '../agents/agentcard/agentcard.react';
import AgentForTraining from './agentfortraining.react';
import AgentsInPrison from './agentsinprison.react';
import AgentsKia from './agentskia.react';
import {list as AgentsList} from '../lib/agents';

import * as actions from './actions';

class AgentsWindow extends Component {
  confirmHire() {
    const {agentforhire} = this.props;
    actions.confirmhire(agentforhire);
  }

  hireAgent() {
    // immutable object must be passed in order to be pushed to array
    var randomagentindex = randomint(0, AgentsList.length);
    actions.hire(immutable.fromJS(AgentsList[randomagentindex]));
  }

  render() {
    const {agentforhire, agents} = this.props;
    var agentfortraining = agents.find(agent => agent.get('randomSkill') > 0);
    const agentfortrainingindex = agents.indexOf(agentfortraining);
    const agentsinprison = agents.filter(agent => agent.get('prison') === true);
    const agentskia = agents.filter(agent => agent.get('KIA') === true);

    return (
      <div id='AgentsWindow'>
        <input
          onClick={this.hireAgent}
          type='button'
          value='Recruit Agent'
          />
        {!!agentforhire &&
          <AgentCard
            agent={agentforhire}
            />}
        {!!agentforhire &&
          <input
            onClick={this.confirmHire.bind(this)}
            type='button' value='Confirm Hire'
            />}
        {!!agentfortraining &&
          <AgentForTraining
            agentfortraining={agentfortraining}
            agentfortrainingindex={agentfortrainingindex}
            />
        }
        {!!agentsinprison &&
          <AgentsInPrison
            agentsinprison={agentsinprison}
            />}
        {!!agentskia &&
          <AgentsKia
            agentskia={agentskia}
            />}
      </div>
    );
  }
}

AgentsWindow.propTypes = {
  agentforhire: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List)
};

export default AgentsWindow;
