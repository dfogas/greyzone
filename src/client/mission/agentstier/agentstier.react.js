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
import BackToMissionButton from './buttons/backtomission.react';

class AgentsTier extends Component {

  render() {
    const {game, jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    const activetasks = jsonapi.getIn(['activemission', 'tasks']);
    const taskscompleted = jsonapi.getIn(['activemission', 'taskscompleted']);
    const isLastTaskDone = taskscompleted.size >= activetasks.size && taskscompleted.size !== 0;
    const isDefaultMission = jsonapi.getIn(['activemission', 'title']) === 'Default Mission';
    const missionStarted = jsonapi.getIn(['activemission', 'started']);
    const missionResult = jsonapi.getIn(['activemission', 'result']);
    const agentontask = jsonapi.getIn(['activemission', 'mission', 'currenttask', 'agentontask']);

    return (
      <div id='AgentsTier'>
        <AgentScrollBarWithNavButtons
          agents={activemission.get('agentsonmission')}
          game={game}
          isBriefing={false}
          isMission={true}
          jsonapi={jsonapi}
          />
        <AgentOnMission
          activemission={activemission}
          game={game}
          jsonapi={jsonapi}
          />
        {activemission.getIn(['equipmenteffects', 'actionchoose']) &&
          <ActionChoose activemission={activemission}/>}
        {!activemission.getIn(['mission', 'currenttask', 'agentlock']) &&
          activemission.getIn(['mission', 'currenttask', 'agentontask']) &&
          <BackToMissionButton
            agentlock={activemission.getIn(['mission', 'currenttask', 'agentlock'])}
          />}
        {activemission.getIn(['equipmenteffects', 'lockeddice']) &&
          <LockedDiceContainer activemission={activemission}/>}
        {isLastTaskDone && !missionResult && missionStarted &&
          <SuccessButton activemission={activemission} />}
        {activemission.getIn(['equipmenteffects', 'damageprotocol']) && !missionResult &&
          <EscapeProtocol activemission={activemission} />}
        {!isLastTaskDone && !missionResult &&
          !isDefaultMission && missionStarted && agentontask &&
          <EscapeButton activemission={activemission} />}
      </div>
    );
  }
}

AgentsTier.propTypes = {
  agents: React.PropTypes.instanceOf(immutable.List),
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default AgentsTier;
