import './agentswindow.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

import AgentsInPrison from './agentsinprison.react';
import AgentsKia from './agentskia.react';
import AgentHireForm from './agenthire.form.react';
import AgentPriceTable from './agentprice.table.react';

class AgentsWindow extends Component {

  hireAgent(character, rank) {
    dashboardActions.hireAgent(character, rank);
    dashboardActions.bookAgentPrice(rank);
  }

  render() {
    const {agenthire, agents, agentspricelist} = this.props;
    const agentsinprison = agents.filter(agent => agent.get('prison') === true);
    const agentskia = agents.filter(agent => agent.get('KIA') === true);

    return (
      <div id='AgentsWindow'>
        {!!agentsinprison &&
          <AgentsInPrison
            agentsinprison={agentsinprison}
            />}
        {!!agentskia &&
          <AgentsKia
            agentskia={agentskia}
            />}
        {/*<button
          className='hire-agent'
          id='HireAgentRankOne'
          onClick={(e) => this.hireAgent('operative', 1)}
          >Hire Operative Rank 1
        </button>
        <button
          className='hire-agent'
          id='HireAgentRankOne'
          onClick={(e) => this.hireAgent('spy', 1)}
          >Hire Spy Rank 1
        </button>
        <button
          className='hire-agent'
          id='HireAgentRankOne'
          onClick={(e) => this.hireAgent('technician', 1)}
          >Hire Technician Rank 1
        </button>*/}
        <AgentHireForm
          agenthire={agenthire}
          />
        <br />
        <AgentPriceTable
          agentspricelist={agentspricelist}
          />
      </div>
    );
  }
}

AgentsWindow.propTypes = {
  agenthire: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List),
  agentspricelist: React.PropTypes.instanceOf(immutable.List),
  cash: React.PropTypes.number
};

export default AgentsWindow;
