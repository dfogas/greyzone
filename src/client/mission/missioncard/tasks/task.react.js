/* Dumb Component */
import './task.styl';
import Component from '../../../components/component.react';
import React from 'react';
import Action from '../action.react';
import classnames from 'classnames';
import immutable from 'immutable';
import taskName from '../../../lib/bml/taskname';
import uuid from '../../../lib/guid';

class Task extends Component {
  render() {
    const {game, task} = this.props;
    const classString = classnames('task', {
      'actual': this.props.isActual,
      'current': this.props.isCurrent,
      'on-mission': this.props.isMission
    });

    return (
      <div className='task-fieldset'>
        <div className='task-fieldset-legend'>{taskName(task, game)}</div>
        <ul
          className={classString}
          key={uuid() + 'missiontask'}>
          {task.map((action, i) => {
            return (
              <Action
                action={action}
                isActual={this.props.isActual || false}
                isCurrent={this.props.isCurrent || false}
                isMission={this.props.isMission || false}
                key={uuid() + i}
                taskindex={i}
                />
            );
          })}
        </ul>
      </div>
    );
  }
}

Task.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  isActual: React.PropTypes.bool,
  isCurrent: React.PropTypes.bool,
  isMission: React.PropTypes.bool,
  task: React.PropTypes.instanceOf(immutable.List)
};

export default Task;
