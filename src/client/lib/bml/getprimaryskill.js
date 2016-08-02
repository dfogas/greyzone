/* ImmutableMap(agent) -> String
  BML: true
*/

var getPrimarySkill = function(agent) {
  if (agent.get('specialist') === 'operative')
    return 'operationsSkill';
  else if (agent.get('specialist') === 'technician')
    return 'electronicsSkill';
  else
    return 'stealthSkill';
};

export default getPrimarySkill;
