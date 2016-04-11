import './agents.list.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

import AgentsListRecord from './agents.list.record.react';

class AgentsList extends Component {
  agentHireTip() {
    dashboardActions.showTip('agenthire');
  }

  render() {
    const {agentbeingsaved, agents, dashboard, options} = this.props;

    if (!agents.size || dashboard.getIn(['strategical', 'agenthire', 'tip']))
      return (
        <div id="AgentsList">
          <span id="DashboardAgentsListPlaceholder">
            {msg('dashboard.strategical.agenthire.placeholder')}
          </span>
          <button
            id='AgentHireTip'
            onClick={this.agentHireTip}>Tip</button>
        </div>
      );

    return (
      <div id="AgentsList">
        <table>
          <tbody>
            {agents
              .filter(agent => agent !== null)
              .map(agent => {
                return (
                  <AgentsListRecord
                    agent={agent}
                    agentbeingsaved={agentbeingsaved}
                    />
              );
              })
            }
          </tbody>
        </table>
        {options.get('tipsenable') && <button
          id='AgentHireTip'
          onClick={this.agentHireTip}>Tip</button>}
      </div>
    );
  }
}

AgentsList.propTypes = {
  agentbeingsaved: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List),
  dashboard: React.PropTypes.instanceOf(immutable.Map),
  options: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentsList;
