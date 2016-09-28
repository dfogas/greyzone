/* Smart Component */
import './tabletop.styl';
import * as componentsActions from '../../../components/actions';
import * as diceActions from '../dice/actions';
import * as missionActions from '../../actions';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import canCompleteTask from '../../../lib/bml/cancompletetask';

import ProbabilityBar from './probability.bar.react';
import Dice from '../rotatingdie/rotating.die.react';
import MissionTitle from '../../missioncard/missiontitle.react';
import ActionButton from './buttons/actionbutton.react';

class TableTop extends Component {
  allowDrop(ev) {
    ev.preventDefault();
  }

  completeTask() {
    const {jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    const currenttask = activemission.getIn(['tasks', activemission.get('taskscompleted').size]);
    missionActions.completeTask(currenttask);
    missionActions.clearTabletop();
    missionActions.agentOnTaskGetsExperienceForCompletingTask();
    componentsActions.experienceGainFlashToggle();
    setTimeout(() => {
      componentsActions.experienceGainFlashToggle();
      missionActions.clearTask();
    }, 2000);
  }

  drop(ev) {
    ev.preventDefault();
    var dice = JSON.parse(ev.dataTransfer.getData('text'));
    diceActions.create(dice);
  }

  protectiveGearUse() {
    const {jsonapi} = this.props;
    const selecteddices = jsonapi.getIn(['activemission', 'mission', 'currenttask', 'actiondices']).filter(dice => dice.get('rollable'));

    diceActions.protectiveGearUse(selecteddices);
  }

  render() {
    const {jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    const actiondices = activemission.getIn(['mission', 'currenttask', 'actiondices']);
    const agentontask = activemission.getIn(['mission', 'currenttask', 'agentontask']);
    const currenttask = activemission.getIn(['tasks', activemission.get('taskscompleted').size]);
    const dicesthrown = actiondices.map(action => action.get('name'));
    const missionStarted = activemission.get('started');
    const remainingdices = actiondices.map(dice => (immutable.fromJS({type: dice.get('type'), dicekey: dice.get('dicekey'), rollable: dice.get('rollable')})));
    const taskscompleted = activemission.get('taskscompleted');

    const paying = jsonapi.get('paying') ? jsonapi.get('paying').toJS() : null;
    const isPaying = paying ?
    Object.keys(paying).reduce((prev, curr, index, array) => {
      return paying[curr] || prev;
    }, false) : false;
    // console.log(actiondices.toJS());
    // console.log(remainingdices.toJS());
    // console.log(dicesthrown.toJS());

    return (
      <div
        activemission={activemission}
        id='TableTop'
        onDragOver={this.allowDrop}
        onDrop={this.drop}>
        {false && <MissionTitle
          isActual={true}
          title={activemission.get('title')}
          />}
        <div id='TableTopDiceContainer'>
          {agentontask
            && remainingdices.size
            ? remainingdices.map((dice, i) => {
              return (
                <Dice
                  diceindex={i}
                  dicekey={dice.get('dicekey')}
                  dicetype={dice.get('type')}
                  jsonapi={jsonapi}
                  name={dicesthrown.get(i)}
                  rollable={dice.get('rollable')}
                  />
              );
            })
            : !missionStarted
              ? (<div id="MissionStartStatus">Mission has not started yet.</div>)
              : taskscompleted.size >= activemission.get('tasks').size && taskscompleted.size !== 0
                ? (<div id="MissionStartStatus">You have been successfull.</div>)
                : (activemission.getIn(['mission', 'currenttask', 'agentlock'])
                  ? (<div id="MissionStartStatus">So - what now?</div>)
                  : (<div id="MissionStartStatus">Continue next task.</div>))
          }
        </div>
        {isPaying &&
          <ProbabilityBar
            activemission={activemission}
            />}
        {currenttask
          && canCompleteTask(currenttask.toJS(), actiondices.toJS())
          && missionStarted
          && (activemission.get('tasks').size !== activemission.get('taskscompleted').size)
          && actiondices.size &&
          <button
            className='taskcomplete-button'
            onClick={this.completeTask.bind(this)}>Complete Task</button>}
        {activemission.getIn(['equipmenteffects', 'protectivegear']) &&
          <button id='ProtectiveGearButton' onClick={this.protectiveGearUse.bind(this)}>Use P.G.</button>}
        {agentontask &&
          <ActionButton
            agentlock={activemission.getIn(['mission', 'currenttask', 'agentlock'])}
            diceslock={activemission.getIn(['mission', 'currenttask', 'diceslock'])}
            missionStarted={missionStarted}
            />}
      </div>
    );
  }
}

TableTop.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default TableTop;
