/* ImmutableMap -> [String] */

const missionTalk = function(jsonapi) {
  const activemission = jsonapi.get('activemission');
  const self = jsonapi.get('self');
  const agentsonmission = activemission.get('agentsonmission');
  const agentontask = activemission.getIn(['mission', 'currenttask', 'agentontask']);
  const agents = agentsonmission.concat((() => {if (agentontask) return [agentontask]; else return []; })());
  // const agentNotPlayer = agents.find(agent => agent.get('id') !== self.get('id'));
  const playerAgentOnMission = agents.find(agent => agent.get('id') === self.get('id'));

  if (playerAgentOnMission && agents.size === 1)
    return [`I got a mission to finish ... and I am alone on it.`];
  else if (playerAgentOnMission && agents.size > 1)
    return [`Hey, we got a mission to complete!`, `Of course we do, lets get to it.`];
  else if (!playerAgentOnMission && agents.size === 1)
    return [`I got to concentrate on this mission, I am alone here... Hopefully it works out.`];
  else if (!playerAgentOnMission && agents.size > 1)
    return [`I dont know, have a bad feeling about this mission.`, `Be cool, partner, we finish this baby and go back home in no time.`];
  else
    return [`Let's go on mission.`];
};

export default missionTalk;
