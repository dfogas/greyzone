import './agents.list.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

import AgentsListRecord from './agents.list.record.react';

class AgentsList extends Component {

  render() {
    const {agentbeingsaved, agents, agentsinroster, dashboard, options} = this.props;
    const debug = options.get('debug');

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
                    agentsinroster={agentsinroster}
                    debug={debug}
                    />
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

AgentsList.propTypes = {
  agentbeingsaved: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List),
  agentsinroster: React.PropTypes.instanceOf(immutable.List),
  dashboard: React.PropTypes.instanceOf(immutable.Map),
  options: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentsList;
