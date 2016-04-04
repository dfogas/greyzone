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
    const {agentbeingfreed, agenthire, agents, agentspricelist, dashboard, log, options} = this.props;

    return (
      <div id='AgentsWindow'>
        <AgentHireForm
          agenthire={agenthire}
          agentspricelist={agentspricelist}
          />
        <div id='AgentsWindowMessage'>
          {log}
        </div>
        <AgentsList
          agentbeingfreed={agentbeingfreed}
          agents={agents}
          dashboard={dashboard}
          options={options}
          />
      </div>
    );
  }
}

AgentsWindow.propTypes = {
  agentbeingfreed: React.PropTypes.instanceOf(immutable.Map),
  agenthire: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List),
  agentspricelist: React.PropTypes.instanceOf(immutable.Map),
  dashboard: React.PropTypes.instanceOf(immutable.Map),
  log: React.PropTypes.string,
  options: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentsWindow;
