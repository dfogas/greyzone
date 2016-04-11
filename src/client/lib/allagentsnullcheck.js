/* Immutable.Map -> Boolean
  it checks for null within agents and agentsonmission
*/

function sanitizeAgents(jsonapi) {
  if (jsonapi.get('agents').concat(jsonapi.getIn(['activemission', 'agentsonmission'])).indexOf(null) !== -1)
    return true;
  else
    return false;
}

export default sanitizeAgents;
