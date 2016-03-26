/* Smart Component */
import './tabletop.styl';
import * as missionActions from '../../actions';
import * as diceActions from '../dice/actions';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import uuid from '../../../lib/guid';
import canCompleteTask from '../../../lib/cancompletetask';

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
    missionActions.completeTask(currenttask);
    missionActions.clearTabletop();
    missionActions.agentOnTaskGetsExperienceForCompletingTask();
    missionActions.clearTask();
  }

  drop(ev) {
    ev.preventDefault();
    var dice = JSON.parse(ev.dataTransfer.getData('text'));
    diceActions.create(dice);
  }

  render() {
    const {activemission} = this.props;
    const actiondices = activemission.getIn(['mission', 'currenttask', 'actiondices']);
    const agentontask = activemission.getIn(['mission', 'currenttask', 'agentontask']);
    const missionStarted = activemission.get('started');
    const dicesthrown = actiondices.toJS().map(action => action.name);
    const remainingdices = actiondices.toJS().map(action => action.type);
    const currenttask = activemission.getIn(['tasks', activemission.get('taskscompleted').size]);

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
        {agentontask && remainingdices.length ?
          remainingdices.map((dice, i) => {
            return (
              <Dice
                diceindex={i}
                dicetype={dice}
                key={uuid() + 'dice'}
                value={dicesthrown[i]}
                />
            );
          }) : <div id="MissionStartStatus">Mission has not started yet.</div>
        }
        <ProbabilityBar />
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
  activemission: React.PropTypes.instanceOf(immutable.Map)
};

export default TableTop;
