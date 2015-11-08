import './tasktier.styl';
// import * as actions from './actions';
import Component from '../../components/component.react';
import immutable from 'immutable';
import React from 'react';

import Task from '../missioncard/tasks/task.react';
import MissionResultList from '../missioncard/results/missionresultlist.react';

class TaskTier extends Component {

  render() {
    const {jsonapi, pendingActions} = this.props;
    const activemission = jsonapi.get('activemission');
    const completedtasks = jsonapi.getIn(['activemission', 'taskscompleted']);
    const currentindex = completedtasks.size;
    const tasks = activemission.get('tasks');

    console.log('CurrentTask index is ', currentindex, ' of ', tasks.size - 1); // eslint-disable-line no-console

    var isMission = false;
    if (this.props.isMission)
      isMission = true;
    return (
      <div id='TaskTier'>
        {tasks.map((task, i) => {
          return (
            <Task
              isCurrent={currentindex === i}
              isMission={isMission}
              task={task}
              />
          );
        })}
        <br />
        <MissionResultList
          activemissiontitle={activemission.get('name')}
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
  activemission: React.PropTypes.instanceOf(immutable.Map),
  isMission: React.PropTypes.bool,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default TaskTier;
