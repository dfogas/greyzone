/* ImmutableMap(Agent) ImmutableMap(Agent) -> String //
   generuje string pro dialogy s agenty (no spíše jednostranné prohlášení, zatím)
   BML: true
*/
import prop from '../general/r.i.prop';

const agentTalk = function(agent, self) {
  const tired = prop('ETA', agent) - Date.now() > 0;
  // console.log('tired: ' + tired);
  if (prop('KIA', agent) === true)
    return 'dead';
  else if (prop('prison', agent) === true)
    return 'prison';
  else if ((prop('id', agent) === self.get('id')) && tired)
    return 'tired.self';
  else if (prop('personality', agent) === 'SP' && tired)
    return 'tired.intimate';
  else if (prop('personality', agent) === 'SJ' && tired)
    return 'tired.soldiery';
  else if (prop('personality', agent) === 'NT' && tired)
    return 'tired.cheeky';
  else if (prop('personality', agent) === 'NF' && tired)
    return 'tired.evasive';
  else if (prop('id', agent) === self.get('id'))
    return 'self';
  else if (prop('personality', agent) === 'SP')
    return 'intimate';
  else if (prop('personality', agent) === 'SJ')
    return 'soldiery';
  else if (prop('personality', agent) === 'NT')
    return 'cheeky';
  else if (prop('personality', agent) === 'NF')
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
  } else {
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
