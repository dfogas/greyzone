/* ImmutableList(agents) => Number(index of picked agent)
  TODO: this should be rewritten to return agent
  BML: true
*/
import randomInt from './getrandomint';

function pickAgentForFatal(agents) {
  if (agents.filter(agent => agent.get('prison') === false).filter(agent => agent.get('KIA') === false).size === 0)
    return -1;
  let i = randomInt(0, agents.size - 1);
  if (!(agents.get(i).get('prison')) && !(agents.get(i).get('KIA')))
    return i;
  else
    pickAgentForFatal(agents.delete(i));
}

export default pickAgentForFatal;
