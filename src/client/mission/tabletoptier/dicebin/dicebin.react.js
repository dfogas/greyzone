import './dicebin.styl';
import Component from '../../../components/component.react';
import React from 'react';

import * as diceActions from '../dice/actions';

class DiceBin extends Component {
  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault();
    var dice = JSON.parse(ev.dataTransfer.getData('text'));
    diceActions.remove(dice);
  }

  render() {
    const {activemission} = this.props;
    const missionstarted = activemission.get('started');
    const dicesthrown = activemission.getIn(['mission', 'currenttask', 'dicesthrown']);
    const remainingdices = activemission.getIn(['mission', 'currenttask', 'remainingdices']);
    const currentindex = activemission.get('taskscompleted').size;
    const currenttask = activemission.getIn(['tasks', currentindex]);

    let taskActions = [], dicesthrownArray = dicesthrown.toArray();
    if (currenttask)
      taskActions = currenttask.toSeq().map(action =>
                        action.get('name'), taskActions)
                      .toArray();
    //nice
    const canCompleteTask = taskActions.every(function(val) {
      let numIn1 = taskActions.filter(function(el) { return el === val; }).length;
      let numIn2 = dicesthrownArray.filter(function(el) { return el === val; }).length;
      return numIn1 <= numIn2;
    });

    return (
      <div
        id='DiceBin'
        onDragOver={this.allowDrop}
        onDrop={this.drop.bind(this)}
        >
        {/*missionstarted && canCompleteTask && <div className='dice-bin' onDragOver={this.allowDrop} onDrop={this.drop.bind(this)} />*/}
        {missionstarted && !canCompleteTask ?
          `Drop die here to retry.` :
          <div
            className='dice-bin'
            onDragOver={this.allowDrop}
            onDrop={this.drop.bind(this)}
            />}
      </div>
    );
  }
}

export default DiceBin;
