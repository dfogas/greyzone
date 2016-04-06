import getRandomSkill from './getrandomskill';

/* Object(TrainingTable) Number Immutable.Map(Agent) => Object(rankupSpecs) */

function agentRankup(trainingtable, maxSkill, agent) {
  let ruo = {agent};
  const {operationsSkill, electronicsSkill, stealthSkill} = {
    operationsSkill: agent.get('operationsSkill'),
    electronicsSkill: agent.get('electronicsSkill'),
    stealthSkill: agent.get('stealthSkill')
  };
  //decide whether to add skill or equipment slot (both is possible)
  if (agent.get('equipmentSlots') < trainingtable[agent.get('rank')].slots)
    ruo.equipment = true;
  if (operationsSkill + electronicsSkill + stealthSkill < trainingtable[agent.get('rank')].statstotal)
    ruo.skill = getRandomSkill(maxSkill, {operationsSkill, electronicsSkill, stealthSkill});

  return ruo;
}

export default agentRankup;
