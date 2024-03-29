/* immutableMap(jsonapi) -> Boolean
  checks number of agents against max agents allowed by capability enhancement
  false - you can't recruit new agent
  true - you can recruit new agent
  BML: true
*/

import allAgents from './allagents';

const maxAgentsCheck = function(jsonapi) {
  const playerAgentIsActive = allAgents(jsonapi).find(ag => ag.get('id') === jsonapi.getIn(['self', 'id']));
  const limit = playerAgentIsActive ? allAgents(jsonapi).size : (allAgents(jsonapi).size + 1);
  const enhancements = jsonapi.get('enhancements').filter(enh => enh.get('type') === 'capability');

  if (limit + 1 <= 4 && enhancements.size >= 1)
    return true;
  if (limit + 1 <= 5 && enhancements.size >= 2)
    return true;
  if (limit + 1 <= 6 && enhancements.size >= 3)
    return true;
  if (limit + 1 <= 7 && enhancements.size >= 4)
    return true;
  if (limit + 1 <= 8 && enhancements.size >= 5)
    return true;
  else
    return false;
};

export default maxAgentsCheck;
