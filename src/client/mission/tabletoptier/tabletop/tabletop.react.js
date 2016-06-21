/* Smart Component */
import './tabletop.styl';
import * as missionActions from '../../actions';
import * as diceActions from '../dice/actions';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import canCompleteTask from '../../../lib/cancompletetask';

import ProbabilityBar from './probability.bar.react';
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
    missionActions.completeTask(currenttask);
    missionActions.clearTabletop();
    missionActions.agentOnTaskGetsExperienceForCompletingTask();
    missionActions.clearTask();
  }

  drop(ev) {
    ev.preventDefault();
    var dice = JSON.parse(ev.dataTransfer.getData('text'));
    console.log(dice);
    diceActions.create(dice);
  }

  protectiveGearUse() {
    const {activemission} = this.props;
    const selecteddices = activemission.getIn(['mission', 'currenttask', 'actiondices']).filter(dice => dice.get('rollable'));

    diceActions.protectiveGearUse(selecteddices);
  }

  render() {
    const {activemission, tutorial} = this.props;
    const actiondices = activemission.getIn(['mission', 'currenttask', 'actiondices']);
    const agentontask = activemission.getIn(['mission', 'currenttask', 'agentontask']);
    const currenttask = activemission.getIn(['tasks', activemission.get('taskscompleted').size]);
    const dicesthrown = actiondices.map(action => action.get('name'));
    const missionStarted = activemission.get('started');
    const protectivegear = activemission.getIn(['equipmenteffects', 'protectivegear']);
    const remainingdices = actiondices.map(dice => (immutable.fromJS({type: dice.get('type'), dicekey: dice.get('dicekey'), rollable: dice.get('rollable')})));
//
    // console.log(actiondices.toJS());
    // console.log(remainingdices.toJS());
    // console.log(dicesthrown.toJS());

    return (
      <div
        activemission={activemission}
        id='TableTop'
        onDragOver={this.allowDrop}
        onDrop={this.drop}>
        <MissionTitle
          isActual={true}
          title={activemission.get('title')}
          />
        {agentontask && remainingdices.size ?
          remainingdices.map((dice, i) => {
            return (
              <Dice
                diceindex={i}
                dicekey={dice.get('dicekey')}
                dicetype={dice.get('type')}
                name={dicesthrown.get(i)}
                rollable={dice.get('rollable')}
                />
            );
          }) : <div id="MissionStartStatus">Mission has not started yet.</div>
        }
        <ProbabilityBar
          activemission={activemission}
          />
        {currenttask &&
          canCompleteTask(currenttask.toJS(), actiondices.toJS()) &&
          missionStarted &&
          (activemission.get('tasks').size !== activemission.get('taskscompleted').size) &&
          <input
            className='taskcomplete-button'
            onClick={this.completeTask.bind(this)}
            type='button'
            value='CompleteTask'
            />}
        {protectivegear &&
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
  activemission: React.PropTypes.instanceOf(immutable.Map),
  tutorial: React.PropTypes.instanceOf(immutable.Map)
};

export default TableTop;
