/* ImmutableMap(jsonapi) -> String */
import allAgents from './allagents';

function checkBadEnds(jsonapi) {
  const countrystats = jsonapi.get('countrystats');
  const paying = jsonapi.get('paying') ? jsonapi.get('paying').toJS() : null;
  const isPaying = paying ?
    Object.keys(paying).reduce((prev, curr) => {
      return paying[curr] || prev;
    }, false) : false;

  if (jsonapi.get('agents').filter(agent => agent.get('KIA') && agent.get('id') === jsonapi.getIn(['self', 'id'])).size !== 0)
    return 'Killed';
  else if (jsonapi.get('agents').filter(agent => agent.get('prison') && agent.get('id') === jsonapi.getIn(['self', 'id'])).size !== 0 && !isPaying)
    return 'LeftInPrison';
  else if (
    jsonapi.get('agents').filter(
      agent => agent.get('prison') && agent.get('id') === jsonapi.getIn(['self', 'id'])).size !== 0 &&  // player's agent is in agent's roster and has prison status true
        allAgents(jsonapi).filter(agent => agent.get('loyalty') === 'loyal').size === 0 // no agent of organization is loyal
  )
    return 'LeftInPrison';
  else if (countrystats.filter(cs => cs.get('obscurity') === 0).size > 3)
    return 'Discovered';
  else
    return '';
}

export default checkBadEnds;
