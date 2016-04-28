/* ImmutableMap(Agent) ImmutableMap(Equipment) -> Boolean
  will the equipment use succeed?
*/

function equipmentUseCheck(agent, equipment) {
  const agentclass = agent.get('specialist');
  const equipmenttype = equipment.get('tag').slice(2);
  if (
    (agentclass === 'operative' && equipmenttype === 'O') ||
    (agentclass === 'technician' && equipmenttype === 'E') ||
    (agentclass === 'spy' && equipmenttype === 'S')
  ) {
    let useCheck = Math.random() > 0.10;
    return useCheck;
  } else {
    let useCheck = Math.random() > 0.90;
    return useCheck;
  }
}

export default equipmentUseCheck;
