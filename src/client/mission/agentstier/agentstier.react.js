import './agentstier.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

// first mission
import AnotherEquipmentUseHint from '../../tutorial/firstmission/another.equipmentuse.hint.react';
import EquipmentUseHint from '../../tutorial/firstmission/equipment.use.hint.react';

import ActionChoose from './buttons/action.choose.react';
import AgentScrollBarWithNavButtons from '../../agents/scrollbar/agentscrollbarwithnavbuttons.react';
import AgentOnMission from './agentonmission/agentonmission.react';
import BackToMissionButton from './buttons/backtomission.react';
import EscapeButton from './buttons/escapebutton.react';
import EscapeProtocol from './buttons/escapeprotocol.react';
import LockedDiceContainer from './buttons/lockeddicecontainer.react';
import SuccessButton from './buttons/successbutton.react';

class AgentsTier extends Component {

  render() {
    const {game, jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    const taskscompleted = jsonapi.getIn(['activemission', 'taskscompleted']);
    const activetasks = jsonapi.getIn(['activemission', 'tasks']);

    const isLastTaskDone = taskscompleted.size >= activetasks.size && taskscompleted.size !== 0;
    const isDefaultMission = jsonapi.getIn(['activemission', 'title']) === 'Default Mission';
    const isPlaceholder = jsonapi.getIn(['activemission', 'title']) === 'Quiet before the Storm';
    const missionStarted = jsonapi.getIn(['activemission', 'started']);
    const missionResult = jsonapi.getIn(['activemission', 'result']);
    const agentontask = jsonapi.getIn(['activemission', 'mission', 'currenttask', 'agentontask']);

    const actiondices = activemission.getIn(['mission', 'currenttask', 'actiondices']);
    const missionstarted = activemission.get('started');
    const currentindex = activemission.get('taskscompleted').size;
    const currenttask = activemission.getIn(['tasks', currentindex]) || immutable.fromJS(Array(0));

    return (
      <div id='AgentsTier'>
        {!isPlaceholder &&
          <AgentScrollBarWithNavButtons
            agents={activemission.get('agentsonmission')}
            game={game}
            isBriefing={false}
            isMission={true}
            jsonapi={jsonapi}
          />}
        {!isPlaceholder &&
          <AgentOnMission
            activemission={activemission}
            game={game}
            jsonapi={jsonapi}
            />}
        {jsonapi.getIn(['tutorial', 'firstmission', 'equipmentusehint'])
          && activemission.getIn(['mission', 'currenttask', 'diceslock'])
          && !jsonapi.getIn(['tutorial', 'firstmission', 'anotherequipmentusehint']) &&
            <AnotherEquipmentUseHint
              firstmission={jsonapi.getIn(['tutorial', 'firstmission'])} />}
        {!jsonapi.getIn(['tutorial', 'firstmission', 'equipmentusehint']) &&
          <EquipmentUseHint firstmission={jsonapi.getIn(['tutorial', 'firstmission'])} />}
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
        {!isLastTaskDone && !missionResult && (currenttask.size > actiondices.size) &&
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
