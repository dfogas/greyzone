import * as agentsActions from '../../agents/actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

class AgentListRecord extends Component {
  dismissAgent() {
    const {agent} = this.props;
    agentsActions.dismissAgent(agent);
  }

  render() {
    const {agent} = this.props;

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
        <td>
          <button
            className='agent-dismiss-button'
            onClick={this.dismissAgent.bind(this)}
            style={{backgroundColor: 'darkred'}}>{agent.get('prison') && 'Let her rot.'}{!agent.get('prison') && 'Let her go.'}</button></td>
      </tr>
    );
  }
}

AgentListRecord.propTypes = {
  agent: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentListRecord;
