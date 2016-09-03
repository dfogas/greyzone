import './mission.talk.styl'; //
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import AgentTalkProfile from './agent.talk.profile.react';

class MissionTalk extends Component {
  render() {
    const {/*game,*/ jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    const self = jsonapi.get('self');
    const agentLimit = activemission.get('agentLimit');
    const agentsonmission = activemission.get('agentsonmission');
    const agentontask = activemission.getIn(['mission', 'currenttask', 'agentontask']);
    const agents = agentsonmission.concat((() => {if (agentontask) return [agentontask]; else return []; })());
    const playerAgentOnMission = agents.find(agent => agent.get('id') === self.get('id'));
    const agentNotPlayer = agents.find(agent => agent.get('id') !== self.get('id'));
    return (
      <div className='mission-talk'>
        {playerAgentOnMission && agentLimit === 1 &&
          <AgentTalkProfile
            agent={playerAgentOnMission}
            talk={`Oh great, I got a mission to finish ... and I am alone on it.`}
            />
        }
        {playerAgentOnMission && agentLimit > 1 &&
          <AgentTalkProfile
            agent={agentNotPlayer}
            talk={'Hey, boss, we got a mission to complete!'}
            />}
        {playerAgentOnMission && agentLimit > 1 &&
          <AgentTalkProfile
            agent={playerAgentOnMission}
            talk={'Of course we do, lets get to it.'}
            />}
        {!playerAgentOnMission && agentLimit === 1 &&
          <div className='agent-talk'>
            <AgentTalkProfile
              agent={agentNotPlayer}
              talk={'I got to concentrate on this mission, I am alone here... Hopefully it works out.'}
              />
          </div>}
        {!playerAgentOnMission && agentLimit > 1 &&
            <AgentTalkProfile
              agent={agentNotPlayer}
              talk={'I dont know, have a bad feeling about this mission.'}
              /> &&
            <AgentTalkProfile
              agent={agents.get(1)}
              talk={'Be cool, partner, we finish this baby and go back home in no time.'}
              />}
      </div>
    );
  }
}

MissionTalk.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionTalk;
