import './dicebin.styl';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import canCompleteTask from '../../../lib/bml/cancompletetask';

import * as diceActions from '../dice/actions';

class DiceBin extends Component {
  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    const {activemission} = this.props;
    const actiondices = activemission.getIn(['mission', 'currenttask', 'actiondices']);
    ev.preventDefault();
    var dice = JSON.parse(ev.dataTransfer.getData('text'));
    console.log(dice);
    if (actiondices.find(die => die.get('dicekey') === dice.dicekey))
      diceActions.remove(dice);
  }

  render() {
    const {activemission} = this.props;
    const actiondices = activemission.getIn(['mission', 'currenttask', 'actiondices']);
    const missionstarted = activemission.get('started');
    const currentindex = activemission.get('taskscompleted').size;
    const currenttask = activemission.getIn(['tasks', currentindex]) || immutable.fromJS(Array(0));

    return (
      <div
        id='DiceBin'
        onDragOver={this.allowDrop}
        onDrop={this.drop.bind(this)}
        >
        {/*missionstarted && canCompleteTask && <div className='dice-bin' onDragOver={this.allowDrop} onDrop={this.drop.bind(this)} />*/}
        {missionstarted && !canCompleteTask(currenttask.toJS(), actiondices.toJS()) ?
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

DiceBin.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map)
};

export default DiceBin;
