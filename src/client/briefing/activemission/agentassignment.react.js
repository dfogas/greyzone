import './agentassignment.styl';
import * as briefingActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import AgentCard from '../../agents/agentcard/agent.card.react';
import immutable from 'immutable';

class AgentAssignment extends Component {
  drop(ev) {
    const {jsonapi} = this.props;
    const agents = jsonapi.get('agents');
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');

    if (jsonapi.getIn(['dashboard', 'countryofoperation']) === jsonapi.getIn(['activemission', 'inCountry']))
      briefingActions.assignMission(agents.find(agent => agent.get('name') === data));
    else
      briefingActions.flashBriefing(`You are not in the country.`);
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  render() {
    const {assignmentindex, game, jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
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
  agents: React.PropTypes.instanceOf(immutable.List),
  assignmentindex: React.PropTypes.number,
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentAssignment;
