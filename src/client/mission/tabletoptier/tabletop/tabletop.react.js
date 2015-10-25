/*
  Smart Component
*/
import './tabletop.styl';
import * as missionActions from '../../actions';
import * as diceActions from '../dice/actions';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import uuid from '../../../lib/guid';

import ProbabilityBar from './probabilitybar.react';
import Dice from '../dice/dice.react';
import MissionTitle from '../../missioncard/missiontitle.react';
import ActionButton from './buttons/actionbutton.react';


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
    const {activemission} = this.props;
    const title = activemission.get('title');
    const agentontask = activemission.getIn(['mission', 'currenttask', 'agentontask']);
    const missionStarted = activemission.get('started');

    const diceslock = activemission.getIn(['mission', 'currenttask', 'diceslock']);
    const dicesthrown = activemission.getIn(['mission', 'currenttask', 'dicesthrown']);
    const remainingdices = activemission.getIn(['mission', 'currenttask', 'remainingdices']);

    const taskscompleted = activemission.get('taskscompleted');
    const currentindex = taskscompleted.size;
    const currenttask = activemission.getIn(['tasks', currentindex]);

    let taskActions = [];
    let dicesthrownArray = dicesthrown.toArray();

    if (currenttask)
      taskActions = currenttask.toSeq().map(action => action.get('name'), taskActions).toArray();

    //nice
    let canCompleteTask = taskActions.every(function(val) {
      let numIn1 = taskActions.filter(function(el) { return el === val; }).length;
      let numIn2 = dicesthrownArray.filter(function(el) { return el === val; }).length;
      return numIn1 <= numIn2;
    });

    return (
      <div
        activemission={activemission}
        id='TableTop'
        onDragOver={this.allowDrop}
        onDrop={this.drop}>
        <MissionTitle
          title={title}
          />
        {agentontask && remainingdices.size &&
          remainingdices.map((dice, i) => {
            return (
              <Dice
                diceindex={i}
                dicetype={dice}
                key={uuid() + 'dice'}
                value={dicesthrown.get(i)}
                />
            );
          })
        }
        <ProbabilityBar />
        {canCompleteTask && missionStarted &&
          <input
            className='taskcomplete-button'
            onClick={this.completeTask.bind(this)}
            type='button'
            value='CompleteTask'
            />}
        {agentontask &&
          <ActionButton
            diceslock={diceslock}
            missionStarted={missionStarted}
            />}
      </div>
    );
  }
}

TableTop.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map)
};

export default TableTop;
