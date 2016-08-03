import './tasktier.styl';
// import * as actions from './actions';
import Component from '../../components/component.react';
import immutable from 'immutable';
import React from 'react';
import uuid from '../../lib/guid';

import Task from '../missioncard/tasks/task.react';
import MissionResultList from '../missioncard/results/mission.result.list.react';

class TaskTier extends Component {

  render() {
    const {activemission} = this.props;
    const tasks = activemission.get('tasks');

    return (
      <div id='TaskTier'>
        {tasks.map((task, i) => {
          return (
            <Task
              isCurrent={activemission.get('taskscompleted').size === i}
              isMission={true}
              key={uuid() + 'missiontask'}
              task={task}
              />
          );
        })}
        <br />
        <MissionResultList
          activemissiontitle={activemission.get('title')}
          isLoss={true}
          isTask={true}
          losses={activemission.get('losses')}
          />
        <br />
        <MissionResultList
          activemissiontitle={activemission.get('title')}
          isReward={true}
          isTask={true}
          rewards={activemission.get('rewards')}
          />
      </div>
    );
  }
}

TaskTier.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default TaskTier;
