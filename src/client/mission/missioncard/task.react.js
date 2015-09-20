import Component from '../../components/component.react';
import React from 'react';
import Action from './action.react';
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
      <div className={'task' + classString}>
        <Action action={task.get(0)} isActual={isActual} isBriefing={isBriefing} isCurrent={isCurrent} isMission={isMission} isSpecial={isSpecial} />
        <Action action={task.get(1)} isActual={isActual} isBriefing={isBriefing} isCurrent={isCurrent} isMission={isMission} isSpecial={isSpecial} />
        <Action action={task.get(2)} isActual={isActual} isBriefing={isBriefing} isCurrent={isCurrent} isMission={isMission} isSpecial={isSpecial} />
      </div>
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
