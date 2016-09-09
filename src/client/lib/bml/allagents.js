/* Covered */
/*
  State(Immutable.Map) -> AgentsList(Immutable.List)
  returns all agents of organizations regardless of their position in state structure
  does not check for self
  BML: true
*/
function checkThenConcat(item) {
  if (item)
    return [item];
  else
    return [];
}

const allAgents = function(jsonapi) {
  const agents = jsonapi.get('agents');
  const agentsonmission = jsonapi.getIn(['activemission', 'agentsonmission']);
  const agentinarmory = jsonapi.get('agentinarmory');
  const agentbeingsaved = jsonapi.get('agentbeingsaved');
  const agentontask = jsonapi.getIn(['activemission', 'mission', 'currenttask', 'agentontask']);
  const self = jsonapi.get('self');
  const allagents = agents
    .concat(agentsonmission)
    .concat(checkThenConcat(agentinarmory))
    .concat(checkThenConcat(agentbeingsaved))
    .concat(checkThenConcat(agentontask));

  const playerAgentIsActive = allagents.find(agent => agent.get('id') === self.get('id'));

  return playerAgentIsActive ? allagents : allagents.concat(checkThenConcat(self));
};

export default allAgents;
// module.exports = allAgents;
