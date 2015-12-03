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

    actions.assignMission(agents.find(agent => agent.get('name') === data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  render() {
    const {activemission, assignmentindex} = this.props;
    const agentonmission = activemission.getIn(['agentsonmission', assignmentindex - 1]) || null;

    return (
      <div
        className='agent-assignment'
        id={'AgentAssignment' + assignmentindex}
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
  assignmentindex: React.PropTypes.number,
  agents: React.PropTypes.instanceOf(immutable.List)
};

export default AgentAssignment;
