/*
  Dumb Component
*/
import './task.styl';
import Component from '../../../components/component.react';
import React from 'react';
import Action from '../action.react';
import immutable from 'immutable';

class Task extends Component {
  render() {
    let {task} = this.props;
    let classString = '';
    let isActual = false;
    let isBriefing = false;
    let isCurrent = false;
    let isMission = false;
    let isSpecial = false;

    if (!this.props.task) {
      task = [
        {name: '', type: '', imgsrc: 'empty.jpg'},
        {name: '', type: '', imgsrc: 'empty.jpg'},
        {name: '', type: '', imgsrc: 'empty.jpg'}
      ];
      task = immutable.fromJS(task);
    }
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
      <ul className={'task' + classString}>
        {task.map((action, i) => {
          return (
            <Action
              action={action}
              isActual={isActual}
              isBriefing={isBriefing}
              isCurrent={isCurrent}
              isMission={isMission}
              isSpecial={isSpecial}
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
