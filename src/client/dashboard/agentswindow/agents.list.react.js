import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';
import uuid from '../../lib/guid';

import AgentsListRecord from './agents.list.record.react';

class AgentsList extends Component {

  render() {
    const {agentbeingsaved, agents, agentondisplay, options, self} = this.props;
    const debug = options.get('debug');

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
                    agentondisplay={agentondisplay}
                    debug={debug}
                    key={uuid() + 'agentslist'}
                    self={self}
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
  agentondisplay: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List),
  options: React.PropTypes.instanceOf(immutable.Map),
  self: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentsList;
