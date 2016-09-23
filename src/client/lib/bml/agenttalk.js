/* ImmutableMap(Agent) ImmutableMap(PlayerState) -> String
   generuje string pro dialogy s agenty (no spíše jednostranné prohlášení, zatím)
   BML: true
*/
import prop from '../general/r.i.prop';
import randomInt from '../getrandomint';
import talksList from './talk/talks.list';

const agentTalk = function(agent, jsonapi) {
  // const tired = prop('ETA', agent) - Date.now() > 0;
  // const self = jsonapi.get('self');
  // TODO: check if this needs to be here or not
  if (prop('KIA', agent) === true)
    return `I'm dead...`;
  const arrayTalk = Object.keys(talksList)
    .reduce((prev, curr) => {return prev.concat(talksList[curr]); }, [])
    .filter(item => item.personality === agent.get('personality'));
  return arrayTalk[randomInt(0, arrayTalk.length - 1)];
};

export default agentTalk;
