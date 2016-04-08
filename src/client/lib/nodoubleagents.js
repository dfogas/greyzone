/* [Agent] Number(rank) String(specialist) => {NoDoubleAgent}
  poněkud krkolomné ošetření toho, že se nebudou duplikovat agenti
*/

import Agent from '../../server/lib/greyzone/agents.generator';
import ProfilePics from '../../server/lib/greyzone/profilepics.list';
import reservedPick from './reservedpick';

function noDoubleAgents(agents, rank, specialist) {
  var noDoubleAgent = Agent(specialist, rank);
  noDoubleAgent.imgsrc = '../../assets/img/agents/' + specialist + '/' + specialist + reservedPick(
    agents
      .filter(agent => agent.specialist === specialist)
      .map(agent => parseInt(agent.imgsrc.substr(agent.imgsrc.length - 9, 1), 10)),
    parseInt(noDoubleAgent.imgsrc.substr(noDoubleAgent.imgsrc.length - 9, 1), 10),
    0,
    ProfilePics[specialist].length - 1
  ) + '_128.png';

  return noDoubleAgent;
}

export default noDoubleAgents;
