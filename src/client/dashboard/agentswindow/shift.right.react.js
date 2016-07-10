import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class AgentShiftRight extends Component {
  agentShiftRight() {
    const {agents, agentondisplay} = this.props;
    const agentondisplayindex = agents.indexOf(agents.find(agent => agent.get('id') === agentondisplay.get('id')));
    dashboardActions.selectAgent(agents.get(agentondisplayindex === agents.size - 1 ? 0 : agentondisplayindex + 1));
  }

  render() {
    return (
      <div
        id='AgentShiftRight'
        onClick={this.agentShiftRight.bind(this)}>
      </div>
    );
  }
}

AgentShiftRight.propTypes = {
  agents:React.PropTypes.instanceOf(immutable.List),
  agentondisplay: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentShiftRight;
