import './taskhelp.overview.styl';
// import * as briefingActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

import Task from '../mission/missioncard/tasks/task.react';

class TaskHelpOverview extends Component {
  render() {
    const {game, jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    const tasks = activemission.get('tasks');
    const actualmissiontasks = tasks.map((task, i) => {
      return (
        <Task
          game={game}
          isActual={true}
          task={task}
          />
      );
    });
    return (
      <div id='TaskHelpOverview'>
        {!!actualmissiontasks.size &&
          actualmissiontasks}
        {!actualmissiontasks.size &&
          <div id='TaskHelpOverviewPlaceholder'>No Tasks for selected mission</div>}
      </div>
    );
  }
}

TaskHelpOverview.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default TaskHelpOverview;
