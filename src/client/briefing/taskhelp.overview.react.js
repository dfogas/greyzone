import './taskhelp.overview.styl';
// import * as briefingActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import uuid from '../lib/guid';

import Task from '../mission/missioncard/tasks/task.react';

class TaskHelpOverview extends Component {
  render() {
    const {jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    const tasks = activemission.get('tasks');
    const actualmissiontasks = tasks.map((task, i) => {
      return (
        <Task
          isActual={true}
          key={uuid() + 'actualtask' + i}
          task={task}
          />
      );
    });
    return (
      <div id='TaskHelpOverview'>
        {actualmissiontasks}
      </div>
    );
  }
}

TaskHelpOverview.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default TaskHelpOverview;
