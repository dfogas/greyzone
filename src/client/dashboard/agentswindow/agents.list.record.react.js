import './agents.list.record.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';
import classnames from 'classnames';

class AgentListRecord extends Component {
  dismissAgent() {
    const {agent} = this.props;
    dashboardActions.dismissAgent(agent);
  }

  saveAgent() {
    const {agent} = this.props;
    dashboardActions.saveAgent(agent);
  }

  render() {
    const {agent, agentbeingfreed} = this.props;
    const isFreed = agentbeingfreed ? agent.get('name') === agentbeingfreed.get('name') : false;

    const classString = classnames('agent-list-record', agent.get('specialist'));

    return (
      <tr className={classString}>
        <td>{agent.get('name')}</td>
        <td>Rank {agent.get('rank')}</td>
        <td>{agent.get('experience')} XP</td>
        <td>{agent.get('prison') ? 'In Prison' : isFreed ? 'Being Rescued' : agent.get('ETA') < Date.now() ? 'Available' : 'Tired'}</td>
        <td style={{color: 'black', fontWeight: 'bold'}}>{agent.get('operationsSkill')}</td>
        <td style={{color: 'black', fontWeight: 'bold'}}>{agent.get('electronicsSkill')}</td>
        <td style={{color: 'black', fontWeight: 'bold'}}>{agent.get('stealthSkill')}</td>
        <td>
          {agent.get('prison') &&
            <button
              className='agent-dismiss-button'
              onClick={this.dismissAgent.bind(this)}
              style={{backgroundColor: 'silver'}}>Let</button>}
        </td>
        <td>
          {agent.get('prison') &&
            <button
              className='agent-save-button'
              onClick={this.saveAgent.bind(this)}
              style={{backgroundColor: 'gold'}}>Save</button>}
        </td>
      </tr>
    );
  }
}

AgentListRecord.propTypes = {
  agent: React.PropTypes.instanceOf(immutable.Map),
  agentbeingfreed: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentListRecord;