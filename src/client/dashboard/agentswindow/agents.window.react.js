/* Dumb Component */
import './agents.window.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import AgentHireForm from './agenthire.form.react';
import AgentsList from './agents.list.react';
import AgentOnDisplay from './agentondisplay.react';
import AgentShiftLeft from './shift.left.react';
import AgentShiftRight from './shift.right.react';

class AgentsWindow extends Component {

  render() {
    const {agentbeingsaved, agenthire, agentlog, agents, agentsinroster, agentspricelist, dashboard, options, self} = this.props;
    const agentondisplay = dashboard.get('agentondisplay');

    return (
      <div id='AgentsWindow'>
        {/*<AgentHireForm
          agenthire={agenthire}
          agentspricelist={agentspricelist}
          />*/}
        <div id='AgentsWindowMessage'>
          {agentlog}
        </div>
        <AgentsList
          agentbeingsaved={agentbeingsaved}
          agentondisplay={agentondisplay}
          agents={agents}
          agentsinroster={agentsinroster}
          options={options}
          self={self}
          />
        <AgentShiftLeft
          agentondisplay={agentondisplay}
          agents={agents}
          />
        {agentondisplay &&
          <AgentOnDisplay
            agentondisplay={agentondisplay}
            />}
        <AgentShiftRight
          agentondisplay={agentondisplay}
          agents={agents}
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
  agentsinroster: React.PropTypes.instanceOf(immutable.List),
  agentspricelist: React.PropTypes.instanceOf(immutable.Map),
  dashboard: React.PropTypes.instanceOf(immutable.Map),
  options: React.PropTypes.instanceOf(immutable.Map),
  self: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentsWindow;
