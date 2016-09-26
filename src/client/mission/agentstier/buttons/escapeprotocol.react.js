import './escapeprotocol.styl';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../../intl/store';

import * as missionActions from '../../actions';

class EscapeProtocol extends Component {
  controldamage() {
    const {activemission} = this.props;
    const agentsonmission = activemission.get('agentsonmission');
    const agentontask = activemission.getIn(['mission', 'currenttask', 'agentontask']);
    missionActions.controldamage(activemission);
    missionActions.agentMissionDone(agentontask);
    missionActions.agentIsBackFromTask();
    missionActions.clearTabletop();
    missionActions.fail();
    for (var i = 0; i < agentsonmission.size; i += 1)
      missionActions.agentMissionDone(agentsonmission.get(i));
    this.organizationMissionDone();
  }

  organizationMissionDone() {
    missionActions.organizationMissionDone();
  }

  render() {
    return (
      <input
        className='escape-protocol'
        onClick={this.controldamage.bind(this)}
        type='button'
        value={msg('mission.buttons.dcp')}
        />
    );
  }
}

EscapeProtocol.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map)
};

export default EscapeProtocol;
