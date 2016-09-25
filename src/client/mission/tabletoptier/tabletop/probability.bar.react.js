import './probability.bar.styl';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import probabilityOfSuccess from '../../../lib/bml/probabilityofsuccess';

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
          `${Math.round((Math.round10(probabilityOfSuccess(actiondices, currenttask), -3)) * 1000) / 10} %` }
      </div>
    );
  }
}

ProbabilityBar.propTypes = {
  actiondices: React.PropTypes.instanceOf(immutable.List),
  activemission: React.PropTypes.instanceOf(immutable.Map),
  currenttask: React.PropTypes.instanceOf(immutable.List)
};

export default ProbabilityBar;
