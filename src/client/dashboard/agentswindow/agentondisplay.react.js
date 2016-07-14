import './agentondisplay.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

import AgentCard from '../../agents/agentcard/agentcard.react';

class AgentOnDisplay extends Component {
  componentDidMount() {
    const {agentondisplay, agents} = this.props;
    if (agentondisplay)
      dashboardActions.selectAgent(agentondisplay);
  }

  putAgentonDisplay() {
    const {agents} = this.props;
    dashboardActions.selectAgentOnDisplay(agents.get(0));
  }

  render() {
    const {agentondisplay, agentbeingsaved, game, jsonapi, self, trainingtable} = this.props;
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
            agentbeingsaved={agentbeingsaved}
            game={game}
            isShowcased={true}
            jsonapi={jsonapi}
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
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  self: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentOnDisplay;
