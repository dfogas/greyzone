/* Number(rank) String(specialist) ImmutableMap(PlayerState) => JSObject(NoDoubleAgent)
  poněkud krkolomné ošetření toho, že se nebudou duplikovat agenti
  BML: true
*/

import Agent from '../../../server/lib/greyzone/agents.generator';
import ProfilePics from '../../../server/lib/greyzone/profilepics.list';
import {gameCursor} from '../../state';
import allAgents from '../../lib/bml/allagents';

function noDoubleAgents(rank, specialist, jsonapi) {
  const playerAgentIsActive = allAgents(jsonapi).find(ag => ag.get('id') === jsonapi.getIn(['self', 'id']));
  const agents = playerAgentIsActive
    ? allAgents(jsonapi)
    : allAgents(jsonapi).push(jsonapi.get('self'));
  let noDoubleAgent = Agent(specialist, rank, gameCursor(['globals', 'trainingtable']));
  const agentPics = playerAgentIsActive
    ? allAgents(jsonapi).map(agent => agent.get('imgsrc'))
    : allAgents(jsonapi).map(agent => agent.get('imgsrc')).push(jsonapi.getIn(['self', 'imgsrc']));
  if (agentPics.indexOf(noDoubleAgent.imgsrc) === -1)
    // console.log('picture is unused yet');
    return noDoubleAgent;
  else if (ProfilePics[specialist].length <= agents.filter(agent => agent.specialist === specialist).length)
    // console.log('too many specialists for pictures');
    return noDoubleAgent;
  else {
    noDoubleAgent.imgsrc = ProfilePics[specialist].filter(pic => agentPics.indexOf(pic) === -1)[0];
    // console.log('the pick is on, ');
    return noDoubleAgent;
  }
}

export default noDoubleAgents;
