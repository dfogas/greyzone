/* Dumb Component */
import './actual.missioncard.styl'; //
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import AgentAssignmentsContainer from './agent.assignments.container.react';
import AgentToken from '../agent.token.react';
import ActiveMissionToggleOff from './active.mission.toggle.off.react';
import MissionResultList from '../../mission/missioncard/results/mission.result.list.react';
import MissionThumbnail from './mission.thumbnail.react';
import MissionTitle from '../../mission/missioncard/missiontitle.react';
import Task from '../../mission/missioncard/tasks/task.react';
// import MissionClock from './mission.clock.react';

class ActualMissionCard extends Component {
  render() {
    const {activemission, components, game, jsonapi} = this.props;
    const isPlaceholder = activemission.get('title') === 'Quiet before the Storm';
    const imgsrc = activemission.get('imgsrc') || 'placeholder.jpg';
    const tasks = activemission.get('tasks');

    const actualmissiontasks = tasks.map((task, i) => {
      return (
        <Task
          game={game}
          isActual={false}
          task={task}
          />
      );
    });

    return (
      <div className={'mission-card actual'}>
        {false &&
          <MissionThumbnail
            imgsrc={imgsrc}
            missiontag={activemission.get('tag')}
            thumbnailtext={components.getIn(['briefing', 'missionthumbnail', 'text'])}
            />}
        <ActiveMissionToggleOff />
        {!isPlaceholder &&
          <MissionTitle
            isActual={false}
            title={activemission.get('title')}
            />}
        {!!actualmissiontasks.size &&
          <div id='ActualMissionTasks'>
            {actualmissiontasks}
          </div>
        }
        <AgentAssignmentsContainer
          jsonapi={jsonapi}
          />
        <div id='AgentTokensContainer'>
          {jsonapi.getIn(['activemission', 'agentsonmission']).map(agent => {
            return (
              <AgentToken
                agent={agent}
                jsonapi={jsonapi}
                />
            );
          })}
        </div>
        <MissionResultList
          isActual={true}
          isLoss={true}
          losses={activemission.get('losses')}
          />
        <MissionResultList
          isActual={true}
          isReward={true}
          rewards={activemission.get('rewards')}
          />
      </div>
    );
  }
}

ActualMissionCard.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  components: React.PropTypes.instanceOf(immutable.Map),
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default ActualMissionCard;
