/*
  Dumb Component
*/
import './task.styl';
import Component from '../../../components/component.react';
import React from 'react';
import Action from '../action.react';
import immutable from 'immutable';
import uuid from '../../../lib/guid';

class Task extends Component {
  render() {
    let {key, task} = this.props;
    let classString = '';
    let isActual = false;
    let isBriefing = false;
    let isCurrent = false;
    let isMission = false;
    let isSpecial = false;

    if (this.props.isActual) {
      classString += ' actual';
      isActual = true;
    }
    if (this.props.isBriefing) {
      classString += ' briefing';
      isBriefing = true;
    }
    if (this.props.isCurrent) {
      classString += ' current';
      isCurrent = true;
    }
    if (this.props.isMission) {
      classString += ' on-mission';
      isMission = true;
    }
    if (this.props.isSpecial) {
      classString += ' special';
      isSpecial = true;
    }
    return (
      <ul
        className={'task' + classString}
        key={key}>
        {task.map((action, i) => {
          return (
            <Action
              action={action}
              isActual={isActual}
              isBriefing={isBriefing}
              isCurrent={isCurrent}
              isMission={isMission}
              isSpecial={isSpecial}
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
  isBriefing: React.PropTypes.bool,
  isCurrent: React.PropTypes.bool,
  isMission: React.PropTypes.bool,
  isSpecial: React.PropTypes.bool,
  task: React.PropTypes.instanceOf(immutable.List)
};

export default Task;
