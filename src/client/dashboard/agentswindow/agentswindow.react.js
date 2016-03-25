/* Dumb Component */
import './agentswindow.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

import AgentsInPrison from './agentsinprison.react';
import AgentsKia from './agentskia.react';
import AgentHireForm from './agenthire.form.react';
import AgentPriceTable from './agentprice.table.react';

class AgentsWindow extends Component {
  render() {
    const {agenthire, agents, agentspricelist, log} = this.props;
    const agentsinprison = agents.filter(agent => agent.get('prison') === true);
    const agentskia = agents.filter(agent => agent.get('KIA') === true);

    return (
      <div id='AgentsWindow'>
        <AgentHireForm
          agenthire={agenthire}
          agentspricelist={agentspricelist}
          />
        <div id='AgentsWindowMessage'>
          {log}
        </div>
        <div id="AgentsList">
          <table>
            {agents.map(agent => {
              return (
                <tr>
                  <td>{agent.get('name')}</td>
                  <td>Rank {agent.get('rank')}</td>
                  <td>{agent.get('experience')} XP</td>
                  <td>{agent.get('prison') ? 'In Prison' : agent.get('ETA') < Date.now() ? 'Available' : 'Tired'}</td>
                  <td>{agent.get('specialist')}</td>
                  <td style={{color: 'red', fontWeight: 'bold'}}>{agent.get('operationsSkill')}</td>
                  <td style={{color: 'green', fontWeight: 'bold'}}>{agent.get('electronicsSkill')}</td>
                  <td style={{color: 'gold', fontWeight: 'bold'}}>{agent.get('stealthSkill')}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

AgentsWindow.propTypes = {
  agenthire: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List),
  agentspricelist: React.PropTypes.instanceOf(immutable.Map),
  cash: React.PropTypes.number
};

export default AgentsWindow;
