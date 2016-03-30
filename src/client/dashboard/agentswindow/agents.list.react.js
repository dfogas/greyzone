import * as agentsActions from '../../agents/actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

import AgentsListRecord from './agents.list.record.react';

class AgentsList extends Component {
  render() {
    const {agents} = this.props;

    return (
      <div id="AgentsList">
        <table>
          {agents.map(agent => {
            return (
              <AgentsListRecord
                agent={agent}
                />
            );
          })}
        </table>
      </div>
    );
  }
}

AgentsList.propTypes = {
  agents: React.PropTypes.instanceOf(immutable.List)
};

export default AgentsList;
