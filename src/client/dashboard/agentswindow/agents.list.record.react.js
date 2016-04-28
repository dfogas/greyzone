import './agents.list.record.styl';
import * as dashboardActions from '../actions';
import * as agentsActions from '../../agents/actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';
import classnames from 'classnames';

class AgentListRecord extends Component {
  dismissAgent() {
    const {agent} = this.props;
    agentsActions.dismissAgent(agent);
  }

  honorAgent() {
    const {agent} = this.props;
    agentsActions.honorAgent(agent);
  }

  saveAgent() {
    const {agent} = this.props;
    dashboardActions.saveAgent(agent);
  }

  render() {
    const {agent, agentbeingsaved, agentsinroster, debug} = this.props;
    const isFreed = agentbeingsaved ? agent.get('name') === agentbeingsaved.get('name') : false;

    const classString = classnames('agent-list-record', agent.get('specialist'));

    return (
      <tr className={classString}>
        <td>{agent.get('name')}</td>
        <td>Rank {agent.get('rank')}</td>
        <td>{agent.get('experience')} XP</td>
        <td>{
            agent.get('prison') ? msg('dashboard.strategical.agentslist.status.prison') :
            isFreed ? msg('dashboard.strategical.agentslist.status.rescued') :
            agent.get('ETA') < Date.now() ? msg('dashboard.strategical.agentslist.status.available') : msg('dashboard.strategical.agentslist.status.tired')}</td>
        <td style={{fontWeight: 'bold'}}>{agent.get('operationsSkill')}</td>
        <td style={{fontWeight: 'bold'}}>{agent.get('electronicsSkill')}</td>
        <td style={{fontWeight: 'bold'}}>{agent.get('stealthSkill')}</td>
        <td>
          {(agent.get('prison') || debug) && (agentsinroster.indexOf(agent) !== -1) &&
            <button
              className='agent-dismiss-button'
              onClick={this.dismissAgent.bind(this)}
              style={{backgroundColor: 'silver'}}>{msg('dashboard.strategical.agentslist.manage.leaveinprison')}</button>}
        </td>
        <td>
          {agent.get('prison') &&
            <button
              className='agent-save-button'
              onClick={this.saveAgent.bind(this)}
              style={{backgroundColor: 'gold'}}>{msg('dashboard.strategical.agentslist.manage.rescue')}</button>}
        </td>
        <td>
          {agent.get('KIA') &&
            <button
              className='agent-honor-button'
              onClick={this.honorAgent.bind(this)}
              style={{backgroundColor: 'black'}}>{msg('dashboard.strategical.agentslist.manage.honor')}</button>}
        </td>
      </tr>
    );
  }
}

AgentListRecord.propTypes = {
  agent: React.PropTypes.instanceOf(immutable.Map),
  agentbeingsaved: React.PropTypes.instanceOf(immutable.Map),
  agentsinroster: React.PropTypes.instanceOf(immutable.List),
  debug: React.PropTypes.bool
};

export default AgentListRecord;
