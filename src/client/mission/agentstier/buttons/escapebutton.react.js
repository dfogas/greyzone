import './escapebutton.styl'; //
import * as missionActions from '../../actions';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../../intl/store';

class EscapeButton extends Component {
  missionFail() {
    const {activemission} = this.props;
    const agentsonmission = activemission.get('agentsonmission');
    const agentontask = activemission.getIn(['mission', 'currenttask', 'agentontask']);
    missionActions.checkFatalities(activemission.get('losses').toJS());
    missionActions.agentMissionDone(agentontask);
    for (var i = 0; i < agentsonmission.size; i += 1)
      missionActions.agentMissionDone(agentsonmission.get(i));
    missionActions.bookLosses(activemission);
    missionActions.agentIsBackFromTask();
    missionActions.fail();
    missionActions.organizationMissionDone();
  }

  render() {
    return (
      <button
        className='escape-button'
        onClick={this.missionFail.bind(this)}>{msg('mission.buttons.escapesequence')}</button>
    );
  }
}

EscapeButton.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map)
};

export default EscapeButton;
