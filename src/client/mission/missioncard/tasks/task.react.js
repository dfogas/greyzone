/* Dumb Component */
import './task.styl'; //
import Component from '../../../components/component.react';
import React from 'react';
import Action from '../action.react';
import classnames from 'classnames';
import immutable from 'immutable';
import taskName from '../../../lib/bml/taskname';
import uuid from '../../../lib/guid';

class Task extends Component {
  render() {
    const {game, jsonapi, task} = this.props;
    const activemission = jsonapi.getIn(['activemission']);
    const classString = classnames('task', {
      'actual': this.props.isActual,
      'current': this.props.isCurrent,
      'on-mission': this.props.isMission
    });
    // CONVENTION: předpokládáme různé tasky na misi,
    // nefunguje při čerstvém přihlášení
    const isComplete = activemission.get('taskscompleted').find(tc => tc === task);
    // // console.log(task.toJS()); //
    // console.log(isComplete);
    // console.log(activemission.get('taskscompleted').toJS());

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
        {this.props.isMission &&
          <div
            className='taskmission-checkbox'
            style={
              {
                animation: isComplete ? `fadeIn 2s linear` : ``,
                backgroundImage: isComplete ? `url('../../../../../assets/img/checkboxes/big-green-check-64.png')` : `url('../../../../../assets/img/checkboxes/big-red-x-64.png')`
              }
            }>
          </div>}
      </div>
    );
  }
}

Task.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  isActual: React.PropTypes.bool,
  isCurrent: React.PropTypes.bool,
  isMission: React.PropTypes.bool,
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  task: React.PropTypes.instanceOf(immutable.List)
};

export default Task;
