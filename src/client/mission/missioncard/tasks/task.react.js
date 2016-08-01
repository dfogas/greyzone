/* Dumb Component */
import './task.styl';
import Component from '../../../components/component.react';
import React from 'react';
import Action from '../action.react';
import classnames from 'classnames';
import immutable from 'immutable';
import uuid from '../../../lib/guid';

class Task extends Component {
  render() {
    const {key, task} = this.props;
    const classString = classnames('task', {
      'actual': this.props.isActual,
      'current': this.props.isCurrent,
      'on-mission': this.props.isMission
    });

    return (
      <ul
        className={classString}
        key={key}>
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
    );
  }
}

Task.propTypes = {
  isActual: React.PropTypes.bool,
  isCurrent: React.PropTypes.bool,
  isMission: React.PropTypes.bool,
  key: React.PropTypes.string,
  task: React.PropTypes.instanceOf(immutable.List)
};

export default Task;
