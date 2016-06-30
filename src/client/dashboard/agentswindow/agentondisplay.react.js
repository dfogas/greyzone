import './agentondisplay.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

import AgentCard from '../../agents/agentcard/agentcard.react';

class AgentOnDisplay extends Component {
  putAgentonDisplay() {
    const {agents} = this.props;
    dashboardActions.selectAgentOnDisplay(agents.get(0));
  }

  render() {
    const {agentondisplay, self, trainingtable} = this.props;
    return (
      <div
        id='AgentOnDisplay'
        >
        {!agentondisplay &&
          <button
            id='DisplayAgentOnDisplayButton'
            onClick={this.putAgentonDisplay.bind(this)}>See the agent</button>}
        {agentondisplay &&
          <AgentCard
            agent={agentondisplay}
            isShowcased={true}
            self={self}
            trainingtable={trainingtable}
            />}
      </div>
    );
  }
}

AgentOnDisplay.propTypes = {
  agentondisplay: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List),
  self: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentOnDisplay;
