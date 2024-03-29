import './tasktier.styl';
// import * as actions from './actions';
import Component from '../../components/component.react';
import immutable from 'immutable';
import React from 'react';

import Task from '../missioncard/tasks/task.react';
import MissionResultList from '../missioncard/results/mission.result.list.react';

class TaskTier extends Component {

  render() {
    const {game, jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    const isPlaceholder = activemission.get('title') === 'Quiet before the Storm';
    const tasks = activemission.get('tasks');

    return (
      <div id='TaskTier'>
        {tasks.map((task, i) => {
          return (
            <Task
              game={game}
              isCurrent={activemission.get('taskscompleted').size === i}
              isMission={true}
              jsonapi={jsonapi}
              task={task}
              />
          );
        })}
        <br />
        {!isPlaceholder &&
          <MissionResultList
            activemissiontitle={activemission.get('title')}
            isLoss={true}
            isTask={true}
            losses={activemission.get('losses')}
          />}
        <br />
        {!isPlaceholder &&
          <MissionResultList
            activemissiontitle={activemission.get('title')}
            isReward={true}
            isTask={true}
            rewards={activemission.get('rewards')}
          />}
      </div>
    );
  }
}

TaskTier.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default TaskTier;
