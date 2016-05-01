/*
  Dumb Component
*/
import './probabilitybar.styl';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import probabilityOfSuccess from '../../../lib/probabilityofsuccess';

class ProbabilityBar extends Component {
  render() {
    const {activemission} = this.props;
    const actiondices = activemission.getIn(['mission', 'currenttask', 'actiondices']);
    const currenttask = activemission.getIn(['tasks', activemission.get('taskscompleted').size]);
    const taskscompleted = activemission.get('taskscompleted');
    const activetasks = activemission.get('tasks');
    const isLastTaskDone = taskscompleted.size >= activetasks.size && taskscompleted.size !== 0;
    // čupr
    return (
      <div className='probability-bar'>
        {!isLastTaskDone &&
          Math.round10(probabilityOfSuccess(actiondices, currenttask), -2)}
      </div>
    );
  }
}

ProbabilityBar.propTypes = {
  actiondices: React.PropTypes.instanceOf(immutable.List),
  currenttask: React.PropTypes.instanceOf(immutable.List)
};

export default ProbabilityBar;