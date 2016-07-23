const getRandomSkill = require('./getrandomskill');
const getPrimarySkill = require('./getprimaryskill');

/* ImmutableList(TrainingTable) Number Immutable.Map(Agent) => Object(rankupSpecs)
  it determines whether agent should get equipment or statSkill up and control
  that maxSkill is not overstepped (passed to getRandomSkill)
*/

function agentRankup(trainingtable, maxSkill, agent) {
  var ruo = {agent};
  // const {operationsSkill, electronicsSkill, stealthSkill} = {
  //   operationsSkill: agent.get('operationsSkill'),
  //   electronicsSkill: agent.get('electronicsSkill'),
  //   stealthSkill: agent.get('stealthSkill')
  // };
  const operationsSkill = agent.get('operationsSkill');
  const electronicsSkill = agent.get('electronicsSkill');
  const stealthSkill = agent.get('stealthSkill');
  //decide whether to add skill or equipment slot (both is possible)
  if (agent.get('equipmentSlots') < trainingtable.getIn([agent.get('rank'), 'slots']))
    ruo.equipment = true;
  if (operationsSkill + electronicsSkill + stealthSkill < trainingtable.getIn([agent.get('rank'), 'statstotal']))
    ruo.skill = getRandomSkill(maxSkill, {operationsSkill, electronicsSkill, stealthSkill});

  // check for primary skill
  if (agent.get(ruo.skill) + 1 > agent.get(getPrimarySkill(agent)))
    ruo.skill = agent.get(getPrimarySkill(agent));

  return ruo;
}

// export default agentRankup;
module.exports = agentRankup;
