import './mission.talk.styl';
import Component from '../../components/component.react';
import React from 'react';
import checkThenConcat from '../../lib/checkthenconcat';

import AgentTalk from './agent.talk.react';
import PlayerTalk from './player.talk.react';

class MissionTalk extends Component {
  render() {
    const {activemission, self} = this.props;
    const agentsonmission = activemission.get('agentsonmission');
    const agentontask = activemission.getIn(['mission', 'currenttask', 'agentontask']);
    const agents = agentsonmission.concat(checkThenConcat(agentontask));
    const playerAgentOnMission = agents.find(agent => agent.get('id') === self.get('id'));
    const agentNotPlayer = agents.find(agent => agent.get('id') !== self.get('id'));
    return (
      <div className='mission-talk'>
        {playerAgentOnMission && activemission.get('agentLimit') === 1 &&
          <div className='player-talk'>
            Oh great, I got a mission to finish ... and I am alone on it.
          </div>}
        {playerAgentOnMission && activemission.get('agentLimit') > 1 &&
          <div className='mission-dialog'>
            <AgentTalk
              agent={agentNotPlayer}
              talk={'Hey, boss, we got a mission to complete!'}
              />
            <PlayerTalk
              player={playerAgentOnMission}
              talk={'Of course we do, lets get to it.'}
              />
          </div>}
        {!playerAgentOnMission && activemission.get('agentLimit') === 1 &&
          <div className='agent-talk'>
            <AgentTalk
              agent={agentNotPlayer}
              talk={'I got to concentrate on this mission, I am alone here... Hopefully it works out.'}
              />
            <img src={agentNotPlayer.get('imgsrc')} />
          </div>}
        {!playerAgentOnMission && activemission.get('agentLimit') > 1 &&
          <div className='mission-dialog'>
            <AgentTalk
              agent={agentNotPlayer}
              talk={'I dont know, have a bad feeling about this mission.'}
              />
            <AgentTalk
              agent={agents.get(1)}
              talk={'Be cool, partner, we finish this baby and go back home in no time.'}
              />
          </div>}
      </div>
    );
  }
}

export default MissionTalk;
