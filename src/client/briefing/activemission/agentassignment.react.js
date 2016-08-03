import './agentassignment.styl';
import * as briefingActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import AgentCard from '../../agents/agentcard/agent.card.react';
import immutable from 'immutable';

class AgentAssignment extends Component {
  drop(ev) {
    const {agents} = this.props;
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');

    briefingActions.assignMission(agents.find(agent => agent.get('name') === data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  render() {
    const {activemission, assignmentindex, game, jsonapi} = this.props;
    const agentonmission = activemission.getIn(['agentsonmission', assignmentindex - 1]) || null;

    return (
      <div
        className='agent-assignment'
        id={'AgentAssignment' + assignmentindex}
        onDragOver={this.allowDrop}
        onDrop={this.drop.bind(this)}
        >
        {!agentonmission &&
          <div className='assignment-text-placeholder'>Drag&Drop Agent here to assign her to mission.</div>}
        {agentonmission &&
          <AgentCard
            agent={agentonmission}
            game={game}
            jsonapi={jsonapi}
            />}
      </div>
    );
  }
}

AgentAssignment.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List),
  assignmentindex: React.PropTypes.number,
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentAssignment;
