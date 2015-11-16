import './agentassignment.styl';
import * as actions from '../../agents/actions';
import Component from '../../components/component.react';
import React from 'react';
import AgentCard from '../../agents/agentcard/agentcard.react';
import immutable from 'immutable';

class AgentAssignment extends Component {
  drop(ev) {
    const {agents} = this.props;
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    // ev.target.appendChild(document.getElementById(data));

    actions.assignMission(agents.find(agent => agent.get('name') === data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  render() {
    const {id, activemission} = this.props;
    let agentonmission = activemission.getIn(['agentsonmission', id - 1]) || null;

    return (
      <div
        className='agent-assignment'
        id={'AgentAssignment' + id}
        onDragOver={this.allowDrop}
        onDrop={this.drop.bind(this)}
        >
        {agentonmission &&
          <AgentCard agent={agentonmission} />}
      </div>
    );
  }
}

AgentAssignment.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List),
  id:  React.PropTypes.number
};

export default AgentAssignment;
