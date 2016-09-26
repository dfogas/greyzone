import * as missionActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import prop from '../../lib/general/r.i.prop';

import AgentCard from '../../agents/agentcard/agent.card.react';

class MissionResultsFatal extends Component {
  render() {
    const {game, jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    const agentKIA = activemission.get('agentsonmission').find(agent => agent.get('KIA'));
    const agentPrison = activemission.get('agentsonmission').find(agent => agent.get('prison'));
    const damageprotocol = activemission.get('equipmenteffects').get('damageprotocol');
    const result = activemission.get('result');
    const rewards = activemission.get('rewards');
    const losses = activemission.get('losses');
    return (
      <div id='MissionResultsFatal'>
        {(result === 'success' && rewards.keySeq().find(key => key === 'agentImprisoned')) &&
          <li className='mission-result-fatal'>{`Agent ${prop('name', agentPrison)} has been imprisoned.`}</li>}
        {!damageprotocol && (result === 'fail' && losses.keySeq().find(key => key === 'agentImprisoned')) &&
          <li className='mission-result-fatal'>{`Agent ${prop('name', agentPrison)} has been imprisoned.`}</li>}
        {(result === 'success' && rewards.keySeq().find(key => key === 'agentKilled')) &&
          <li className='mission-result-fatal'>{`Agent ${prop('name', agentKIA)} has been killed.`}</li>}
        {(result === 'fail' && losses.keySeq().find(key => key === 'agentKilled')) &&
          <li className='mission-result-fatal'>{`Agent ${prop('name', agentKIA)} has been killed.`}</li>}
        {(result === 'success' && rewards.keySeq().find(key => key === 'agentRecruited')) &&
          <li className='mission-result-fatal'>Agent can be recruited.</li>}
        {activemission.get('agentrecruited') &&
          <div>
            <button
              id='RecruitAgentToggleButton'
              onClick={(e) => missionActions.recruitAgentToggle(activemission.get('agentrecruited'))}>
              {jsonapi.get('agents').find(ag => ag.get('id') === activemission.getIn(['agentrecruited', 'id']))
              ? `Don't Recruit`
              : `Recruit`}</button>
            {<div id='RecruitAgentStatus'>
              {jsonapi.get('agents').find(ag => ag.get('id') === activemission.getIn(['agentrecruited', 'id']))
                ? `Agent is currently joining you.`
                : `Agent isn't joining you now.`
              }
            </div>}
            <AgentCard
              agent={activemission.get('agentrecruited')}
              game={game}
              isRecruit={true}
              jsonapi={jsonapi}
              />
          </div>}
        {(result === 'success' && rewards.keySeq().find(key => key === 'agentFreed')) &&
          <li className='mission-result-special-other'>{`Agent ${jsonapi.get('agents').get(0).get('name')} freed from prison!!`}</li>}
        {(result === 'success' && rewards.keySeq().find(key => key === 'agentLoyal')) &&
          <li className='mission-result-special-other'>Agent changed loyalty to you.</li>}
        {(result === 'fail' && losses.keySeq().find(key => key === 'agentLoyal')) &&
          <li className='mission-result-special-other'>Agent changed loyalty to you.</li>}
      </div>
    );
  }
}

MissionResultsFatal.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionResultsFatal;
