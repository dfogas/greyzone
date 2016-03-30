/* Dumb Component */
import './agentswindow.styl';
import * as agentsActions from '../../agents/actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

import AgentHireForm from './agenthire.form.react';
import AgentPriceTable from './agentprice.table.react';
import AgentsList from './agents.list.react';

class AgentsWindow extends Component {


  render() {
    const {agenthire, agents, agentspricelist, log} = this.props;

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
          agents={agents}
          />
      </div>
    );
  }
}

AgentsWindow.propTypes = {
  agenthire: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List),
  agentspricelist: React.PropTypes.instanceOf(immutable.Map),
  cash: React.PropTypes.number
};

export default AgentsWindow;
