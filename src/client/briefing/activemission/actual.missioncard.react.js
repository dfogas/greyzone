/*
  Dumb Component
*/
import './actual.missioncard.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import uuid from '../../lib/guid';

import MissionTitle from '../../mission/missioncard/missiontitle.react';
import Task from '../../mission/missioncard/tasks/task.react';
import MissionResultList from '../../mission/missioncard/results/missionresultlist.react';
import AgentAssignment from './agentassignment.react';
import MissionThumbnail from './mission.thumbnail.react';
// import MissionClock from './mission.clock.react';

class ActualMissionCard extends Component {
  render() {
    const {activemission, agents, components, game, jsonapi} = this.props;
    const agentlimit = activemission.get('agentLimit');
    const tasks = activemission.get('tasks');
    const imgsrc = activemission.get('imgsrc') || 'placeholder.jpg';

    let isActual = true;
    let isSpecial = false;

    let assignments = [];
    for (let i = 1; i <= agentlimit; i += 1)
      assignments.push(
        <AgentAssignment
          activemission={activemission}
          agents={agents}
          assignmentindex={i}
          game={game}
          jsonapi={jsonapi}
          key={uuid() + 'assignment'}
          />
      );

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
        <MissionThumbnail
          imgsrc={imgsrc}
          missiontag={activemission.get('tag')}
          thumbnailtext={components.getIn(['briefing', 'missionthumbnail', 'text'])}
          />
        <div id='ActualMissionTasks'>
          {actualmissiontasks}
        </div>
        <MissionTitle
          isActual={false}
          isSpecial={isSpecial}
          title={activemission.get('title')}
          />
        <div id='AgentAssignmentsContainer'>
          {assignments}
        </div>
        <MissionResultList
          isActual={isActual}
          isLoss={true}
          isSpecial={isSpecial}
          losses={activemission.get('losses')}
          />
        <MissionResultList
          isActual={isActual}
          isReward={true}
          isSpecial={isSpecial}
          rewards={activemission.get('rewards')}
          />
      </div>
    );
  }
}

ActualMissionCard.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List),
  components: React.PropTypes.instanceOf(immutable.Map)
};

export default ActualMissionCard;
