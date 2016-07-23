/* ImmutableMap(Agent) ImmutableMap(Agent) -> String
   generuje string pro dialogy s agenty (no spíše jednostranné prohlášení, zatím)
   BML: true
*/

const agentTalk = function(agent, self) {
  const tired = agent.get('ETA') - Date.now() > 0;
  // console.log('tired: ' + tired);
  if (agent.get('KIA'))
    return 'dead';
  else if (agent.get('prison'))
    return 'prison';
  else if ((agent.get('id') === self.get('id')) && tired)
    return 'tired.self';
  else if (agent.get('personality') === 'SP' && tired)
    return 'tired.intimate';
  else if (agent.get('personality') === 'SJ' && tired)
    return 'tired.soldiery';
  else if (agent.get('personality') === 'NT' && tired)
    return 'tired.cheeky';
  else if (agent.get('personality') === 'NF' && tired)
    return 'tired.evasive';
  else if (agent.get('id') === self.get('id'))
    return 'self';
  else if (agent.get('personality') === 'SP')
    return 'intimate';
  else if (agent.get('personality') === 'SJ')
    return 'soldiery';
  else if (agent.get('personality') === 'NT')
    return 'cheeky';
  else if (agent.get('personality') === 'NF')
    return 'evasive';
  else if (tired) {
    let chance = Math.random();
    if (chance < 0.35)
      return 'tired.intimate';
    else if (chance < 0.70)
      return 'tired.soldiery';
    else if (chance < 0.85)
      return 'tired.cheeky';
    else
      return 'tired.evasive';
  }
  else {
    let chance = Math.random();
    if (chance < 0.35)
      return 'intimate';
    else if (chance < 0.70)
      return 'soldiery';
    else if (chance < 0.85)
      return 'cheeky';
    else
      return 'evasive';
  }
};

export default agentTalk;
