import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';

class AgentShiftLeft extends Component {
  agentShiftLeft() {
    const {agents, agentondisplay} = this.props;
    const agentondisplayindex = agents.indexOf(agents.find(agent => agent.get('id') === agentondisplay.get('id')));
    dashboardActions.selectAgent(agents.get(agentondisplayindex === 0 ? agents.size - 1 : agentondisplayindex - 1));
  }

  render() {
    return (
      <div
        id='AgentShiftLeft'
        onClick={this.agentShiftLeft.bind(this)}>
      </div>
    );
  }
}

export default AgentShiftLeft;
