/* Dumb Component */
import './agentswindow.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

import AgentHireForm from './agenthire.form.react';
import AgentsList from './agents.list.react';

class AgentsWindow extends Component {

  render() {
    const {agentbeingsaved, agenthire, agentlog, agents, agentsinroster, agentspricelist, dashboard, options} = this.props;

    return (
      <div id='AgentsWindow'>
        <AgentHireForm
          agentspricelist={agentspricelist}
          />
        <div id='AgentsWindowMessage'>
          {agentlog}
        </div>
        <AgentsList
          agentbeingsaved={agentbeingsaved}
          agenthire={agenthire}
          agents={agents}
          agentsinroster={agentsinroster}
          dashboard={dashboard}
          options={options}
          />
      </div>
    );
  }
}

AgentsWindow.propTypes = {
  agentbeingfreed: React.PropTypes.instanceOf(immutable.Map),
  agentbeingsaved: React.PropTypes.instanceOf(immutable.Map),
  agenthire: React.PropTypes.instanceOf(immutable.Map),
  agentlog: React.PropTypes.string,
  agents: React.PropTypes.instanceOf(immutable.List),
  agentsinroster: React.PropTypes.instanceOf(immutable.Map),
  agentspricelist: React.PropTypes.instanceOf(immutable.Map),
  dashboard: React.PropTypes.instanceOf(immutable.Map),
  options: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentsWindow;
