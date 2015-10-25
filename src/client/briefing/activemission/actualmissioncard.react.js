/*
  Dumb Component
*/
import './actualmissioncard.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import uuid from '../../lib/guid';

import MissionTitle from '../../mission/missioncard/missiontitle.react';
import Task from '../../mission/missioncard/tasks/task.react';
import MissionResult from '../../mission/missioncard/results/missionresult.react';
import AgentAssignment from './agentassignment.react';

class ActualMissionCard extends Component {
  render() {
    const {activemission, agents} = this.props;
    const agentlimit = activemission.get('agentLimit');
    const tasks = activemission.get('tasks');

    let isActual = true;
    let isSpecial = false;

    let assignments = [];
    for (let i = 1; i <= agentlimit; i += 1)
      assignments.push(<AgentAssignment activemission={activemission} agents={agents} id={i} />);

    const actualmissiontasks = tasks.map((task, i) => {
      return (
        <Task
          isActual={isActual}
          isSpecial={isSpecial}
          key={uuid() + 'actualtask' + i}
          task={activemission.get('tasks').get(i)}
          />
      );
    });

    return (
      <div className={'mission-card actual'}>
        <MissionTitle isActual={isActual} isSpecial={isSpecial} title={activemission.get('title')}/>
        {/*<Task isActual={isActual} isSpecial={isSpecial} task={activemission.get('tasks').get(0)} />
        <Task isActual={isActual} isSpecial={isSpecial} task={activemission.get('tasks').get(1)} />
        <Task isActual={isActual} isSpecial={isSpecial} task={activemission.get('tasks').get(2)} />
        <Task isActual={isActual} isSpecial={isSpecial} task={activemission.get('tasks').get(3)} />*/}
        {actualmissiontasks}
        {assignments}
        <MissionResult isActual={isActual} isLoss={true} isSpecial={isSpecial} losses={activemission.get('losses')}/>
        <MissionResult isActual={isActual} isReward={true} isSpecial={isSpecial} rewards={activemission.get('rewards')}/>
      </div>
    );
  }
}

ActualMissionCard.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List)
};

export default ActualMissionCard;