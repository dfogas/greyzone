import './dicebin.styl';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import canCompleteTask from '../../../lib/cancompletetask';

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
    const actiondices = activemission.getIn(['mission', 'currenttask', 'actiondices']);
    const missionstarted = activemission.get('started');
    // const dicesthrown = actiondices.toJS().map(action => action.name);
    const currentindex = activemission.get('taskscompleted').size;
    const currenttask = activemission.getIn(['tasks', currentindex]) || immutable.fromJS(Array(0));

    // let taskActions = [];
    // if (currenttask)
    //   taskActions = currenttask.toSeq().map(action =>
    //                     action.get('name'), taskActions)
    //                   .toArray();
    // //nice

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
