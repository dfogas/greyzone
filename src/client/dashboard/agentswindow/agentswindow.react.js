import './agentswindow.styl';
import Component from '../../components/component.react';
import React from 'react';
import hirecost from '../../lib/agenthirecost';
import immutable from 'immutable';
import {msg} from '../../intl/store';
import randomint from '../../lib/getrandomint';

import AgentCard from '../../agents/agentcard/agentcard.react';
import AgentsInPrison from './agentsinprison.react';
import AgentsKia from './agentskia.react';
import {list as AgentsList} from '../../lib/agents';

import * as dashboardActions from '../actions';

class AgentsWindow extends Component {

  confirmHire() {
    const {agentforhire} = this.props;
    const price = hirecost(agentforhire.get('rank'));
    dashboardActions.confirmhire(agentforhire, price);
  }

  hireAgent() {
    // immutable object must be passed in order to be pushed to array
    let randomagentindex = randomint(0, AgentsList.length);
    dashboardActions.hire(immutable.fromJS(AgentsList[randomagentindex]));
  }

  render() {
    const {agentforhire, agents} = this.props;
    const agentsinprison = agents.filter(agent => agent.get('prison') === true);
    const agentskia = agents.filter(agent => agent.get('KIA') === true);
    let price;
    if (agentforhire)
      price = hirecost(agentforhire.get('rank'));

    return (
      <div id='AgentsWindow'>
        <div id='AgentHiringWindow'>
          <input
            onClick={this.hireAgent}
            type='button'
            value={msg('buttons.hireAgent')}
            />
          {!!agentforhire &&
            <AgentCard
              agent={agentforhire}
              />}
          {!!agentforhire &&
            <div className='agent-for-hire-price'>
              Hiring Cost: {price.formatMoney(0, '.', ',')}$
            </div>
          }
          {!!agentforhire &&
            <input
              onClick={this.confirmHire.bind(this)}
              type='button'
              value={msg('buttons.confirmHire')}
              />}
        </div>
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
