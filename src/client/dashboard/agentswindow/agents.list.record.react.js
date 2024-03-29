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
    dashboardActions.dismissAgent(agent);
  }

  honorAgent() {
    const {agent} = this.props;
    agentsActions.honorAgent(agent);
  }

  saveAgent() {
    const {agent} = this.props;
    dashboardActions.saveAgent(agent);
  }

  selectAgentOnDisplay() {
    const {agent} = this.props;
    dashboardActions.selectAgentOnDisplay(agent);
  }

  render() {
    const {agent, agentbeingsaved, agentondisplay, debug, self} = this.props;
    const isFreed = agentbeingsaved ? agent.get('name') === agentbeingsaved.get('name') : false;
    const isOnDisplay = agentondisplay ? agent.get('id') === agentondisplay.get('id') : false;

    const classString = classnames('agent-list-record', agent.get('specialist'), {
      'on-display': isOnDisplay
    });

    return (
      <tr
        className={classString}
        onClick={this.selectAgentOnDisplay.bind(this)}>
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
          {(agent.get('prison') || debug) && (agent.get('id') !== self.get('id')) &&
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
  agentondisplay: React.PropTypes.instanceOf(immutable.Map),
  debug: React.PropTypes.bool,
  self: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentListRecord;
