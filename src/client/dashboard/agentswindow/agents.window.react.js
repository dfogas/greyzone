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
    const {agenthire, agents, dashboard, options, jsonapi, game} = this.props;
    const agentspricelist = game.getIn(['globals', 'constants', 'agentsPriceList']);
    const agentondisplay = dashboard.get('agentondisplay');
    const debug = jsonapi.get(['options', 'debug']);
    const self = jsonapi.get('self');

    return (
      <div id='AgentsWindow'>
        {/*<AgentHireForm
          agenthire={agenthire}
          agentspricelist={agentspricelist}
          />*/}
        {debug &&
          <AgentsList
            agentbeingsaved={jsonapi.get('agentbeingsaved')}
            agentondisplay={agentondisplay}
            agents={agents}
            options={options}
            self={self}
            />}
        <AgentShiftLeft
          agentondisplay={agentondisplay}
          agents={agents}
          />
        <AgentOnDisplay
          agentondisplay={agentondisplay}
          agentbeingsaved={jsonapi.get('agentbeingsaved')}
          agents={agents}
          self={self}
          trainingtable={game.getIn(['globals', 'trainingtable'])}
          />
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
  agenthire: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List),
  agentspricelist: React.PropTypes.instanceOf(immutable.Map),
  dashboard: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  options: React.PropTypes.instanceOf(immutable.Map),
  self: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentsWindow;
