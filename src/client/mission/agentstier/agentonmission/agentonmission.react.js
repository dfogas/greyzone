import './agentonmission.styl';
import * as agentActions from '../../../agents/actions';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../../intl/store';
import AgentCard from '../../../agents/agentcard/agent.card.react';

class AgentOnMission extends Component {

  drop(ev) {
    const {activemission} = this.props;
    const agentontask = activemission.getIn(['mission', 'currenttask', 'agentontask']);
    const agentsonmission = activemission.get('agentsonmission');
    const activetasks = activemission.get('tasks');
    const missionresult = activemission.get('result');
    const taskscompleted = activemission.get('taskscompleted');
    const isLastTaskDone = taskscompleted.size === activetasks.size && taskscompleted.size !== 0;
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    // TODO: Why is this condition here?
    if (agentsonmission.indexOf(agentsonmission.find(agent => agent.get('name') === data)) === -1)
      return;

    if (!agentontask && (missionresult ? (!isLastTaskDone && !missionresult) || (isLastTaskDone && !missionresult) : !isLastTaskDone))
      agentActions.assignTask(agentsonmission.find(agent => agent.get('name') === data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  render() {
    const {activemission, game, jsonapi} = this.props;
    const agentontask = activemission.getIn(['mission', 'currenttask', 'agentontask']);
    const missionresult = activemission.get('result');
    const activetasks = activemission.get('tasks');
    const taskscompleted = activemission.get('taskscompleted');
    const isLastTaskDone = taskscompleted.size === activetasks.size && taskscompleted.size !== 0;

    return (
      <div
        id='AgentOnMission'
        onDragOver={this.allowDrop}
        onDrop={this.drop.bind(this)}
        >
        {!!agentontask &&
          <AgentCard
             agent={agentontask}
             draggable="true"
             game={game}
             isShowcased={true}
             jsonapi={jsonapi}
           />
        }
        {!agentontask && (missionresult ? (!isLastTaskDone && !missionresult) || (isLastTaskDone && !missionresult) : !isLastTaskDone) &&
          <div id='AgentOnMissionStatus'>{msg('tutorial.agentonmission')}</div>}
        {!agentontask && (isLastTaskDone || missionresult) &&
          <div id='AgentOnMissionStatus'>
            `You can't assign task agent now.`
          </div>}
      </div>
    );
  }
}

AgentOnMission.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentOnMission;
