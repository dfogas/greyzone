/* JSArray(Agents) Number(rank) String(specialist) => {NoDoubleAgent}
  poněkud krkolomné ošetření toho, že se nebudou duplikovat agenti
*/

import Agent from '../../server/lib/greyzone/agents.generator';
import ProfilePics from '../../server/lib/greyzone/profilepics.list';
// import reservedPick from './reservedpick';

function noDoubleAgents(agents, rank, specialist) {
  let noDoubleAgent = Agent(specialist, rank);
  const agentPics = agents.map(agent => agent.imgsrc);
  if (agentPics.indexOf(noDoubleAgent.imgsrc) === -1) {
    console.log('picture is unused yet');
    return noDoubleAgent;
  } else if (ProfilePics[specialist].length <= agents.filter(agent => agent.specialist === specialist).length) {
    console.log('too many specialists for pictures');
    return noDoubleAgent;
  }
  else {
    noDoubleAgent.imgsrc = ProfilePics[specialist].filter(pic => agentPics.indexOf(pic) === -1)[0];
    console.log('the pick is on, ');
    return noDoubleAgent;
  }
}

export default noDoubleAgents;
