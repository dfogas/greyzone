import Component from '../components/component.react';
import React from 'react';
import MissionTitle from '../mission/missioncard/missiontitle.react';
import Task from '../mission/missioncard/task.react';
import MissionResult from '../mission/missioncard/results/missionresult.react';
import AgentAssignment from './agentassignment.react';
import immutable from 'immutable';

class ActualMissionCard extends Component {
  render() {
    const {activemission, agents} = this.props;
    const agentlimit = activemission.get('agentLimit');

    let isActual = true;
    let isSpecial = false;

    var assignments = [];
    for (var i = 1; i <= agentlimit; i += 1)
      assignments.push(<AgentAssignment activemission={activemission} agents={agents} id={i} />);

    return (
      <div className={'mission-card actual'}>
        <MissionTitle isActual={isActual} isSpecial={isSpecial} title={activemission.get('title')}/>
        <Task isActual={isActual} isSpecial={isSpecial} task={activemission.get('tasks').get(0)} />
        <Task isActual={isActual} isSpecial={isSpecial} task={activemission.get('tasks').get(1)} />
        <Task isActual={isActual} isSpecial={isSpecial} task={activemission.get('tasks').get(2)} />
        <Task isActual={isActual} isSpecial={isSpecial} task={activemission.get('tasks').get(3)} />
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
