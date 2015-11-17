import './agentinarmory.styl';
import * as agentActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import AgentCard from './agentcard/agentcard.react';
import immutable from 'immutable';

class AgentInArmory extends Component {

  drop(ev) {
    ev.preventDefault();
    const {jsonapi} = this.props;
    const agents = jsonapi.get('agents');
    const agentinarmory = jsonapi.get('agentinarmory');
    var data = ev.dataTransfer.getData('text');

    if (!agentinarmory)
      agentActions.agentToArmory(agents.find(agent => agent.get('name') === data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  render() {
    const {jsonapi} = this.props;
    const agentinarmory = jsonapi.get('agentinarmory');

    return (
      <div
        id="AgentInArmory"
        onDragOver={this.allowDrop.bind(this)}
        onDrop={this.drop.bind(this)}>
        {!!agentinarmory &&
          <AgentCard
            agent={agentinarmory}
            isShowcased={true}
          />
        }
      </div>
    );
  }
}

AgentInArmory.propTypes = {
  agents: React.PropTypes.instanceOf(immutable.List),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentInArmory;
