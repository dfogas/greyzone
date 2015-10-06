import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import ProbabilityBar from './probabilitybar.react';
import Dice from '../../../dice/dice.react';
import MissionTitle from '../../missioncard/missiontitle.react';
import ActionButton from './buttons/actionbutton.react';

import * as missionActions from '../../actions';
import * as diceActions from '../../../dice/actions';

class TableTop extends Component {
  allowDrop(ev) {
    ev.preventDefault();
  }

  completeTask() {
    const {activemission} = this.props;
    const currenttask = activemission.getIn(['tasks', 0]);
    missionActions.taskCompleted(currenttask);
  }

  drop(ev) {
    ev.preventDefault();
    var dice = JSON.parse(ev.dataTransfer.getData('text'));
    diceActions.create(dice);
  }

  render() {
    // variables cache
    const {activemission} = this.props;
    const title = activemission.get('title');
    const agentontask = activemission.getIn(['mission', 'currenttask', 'agentontask']);

    const diceslock = activemission.getIn(['mission', 'currenttask', 'diceslock']);
    const dicesthrown = activemission.getIn(['mission', 'currenttask', 'dicesthrown']);
    const remainingdices = activemission.getIn(['mission', 'currenttask', 'remainingdices']);

    const taskscompleted = activemission.get('taskscompleted');
    const currentindex = taskscompleted.size;
    const currenttask = activemission.getIn(['tasks', currentindex]);

    var taskActions = [];
    var dicesthrownArray = dicesthrown.toArray();

    if (currenttask)
      taskActions = currenttask.toSeq().map(action => action.get('name'), taskActions).toArray();

    var canCompleteTask = taskActions.every(function(val) {
      var numIn1 = taskActions.filter(function(el) { return el === val; }).length;
      var numIn2 = dicesthrownArray.filter(function(el) { return el === val; }).length;
      return numIn1 <= numIn2;
    });

    var i;

    var taskdices;
    if (agentontask && remainingdices.size) {
      taskdices = [];
      for (i = 0; i < remainingdices.size; i += 1)
        taskdices.push(<Dice dicetype={remainingdices.get(i)} value={dicesthrown.get(i)} />);
    }

    return (
      <div activemission={activemission} id='TableTop' onDragOver={this.allowDrop} onDrop={this.drop}>
        <MissionTitle title={title} />
        {taskdices ? taskdices : null}
        <ProbabilityBar />
        {canCompleteTask &&
          <input className='taskcomplete-button' onClick={this.completeTask.bind(this)} type='button' value='CompleteTask' />}
        <ActionButton diceslock={diceslock} />
      </div>
    );
  }
}

TableTop.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map)
};

export default TableTop;
