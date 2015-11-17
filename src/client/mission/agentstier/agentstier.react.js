import './agentstier.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import ActionChoose from './buttons/actionchoose.react';
import AgentScrollBarWithNavButtons from '../../agents/scrollbar/agentscrollbarwithnavbuttons.react';
import AgentOnMission from './agentonmission/agentonmission.react';
import EscapeButton from './buttons/escapebutton.react';
import EscapeProtocol from './buttons/escapeprotocol.react';
import LockedDiceContainer from './buttons/lockeddicecontainer.react';
import SuccessButton from './buttons/successbutton.react';
import MissionEndButton from './buttons/missionendbutton.react';
import MissionTestButton from './buttons/missiontestbutton.react';

class AgentsTier extends Component {

  render() {
    const {jsonapi, pendingActions} = this.props;
    const activemission = jsonapi.get('activemission');
    const activetasks = jsonapi.getIn(['activemission', 'tasks']);
    const taskscompleted = jsonapi.getIn(['activemission', 'taskscompleted']);
    const isMissionSuccess = taskscompleted.size === activetasks.size && taskscompleted.size !== 0;
    const missionStarted = jsonapi.getIn(['activemission', 'started']);

    return (
      <div id='AgentsTier'>
        <AgentScrollBarWithNavButtons
          agents={activemission.get('agentsonmission')}
          isMission={true}
          jsonapi={jsonapi}
          pendingActions={pendingActions}
          />
        <AgentOnMission
          activemission={activemission}
          />
        <MissionTestButton />
        {activemission.get('result') &&
          <MissionEndButton activemission={activemission} />}
        {
          <ActionChoose activemission={activemission} />}
        {activemission.getIn(['equipmenteffects', 'lockeddice']) &&
          <LockedDiceContainer activemission={activemission} />}
        {isMissionSuccess && missionStarted &&
          <SuccessButton activemission={activemission} />}
        {activemission.getIn(['equipmenteffects', 'damageprotocol']) && missionStarted &&
          <EscapeProtocol activemission={activemission} />}
        {!isMissionSuccess && missionStarted &&
          <EscapeButton activemission={activemission} />}
      </div>
    );
  }
}

AgentsTier.propTypes = {
  agents: React.PropTypes.instanceOf(immutable.List),
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default AgentsTier;
