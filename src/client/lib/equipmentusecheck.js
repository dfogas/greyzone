/* ImmutableMap(Agent) ImmutableMap(Equipment) -> Boolean
  will the equipment use succeed?
  BML: true
*/

function equipmentUseCheck(agent, equipment) {
  const agentclass = agent.get('specialist');
  const equipmenttype = equipment.get('tag').slice(2);
  // console.log(equipment.toJS());
  if (
    (agentclass === 'operative' && equipmenttype === 'O') ||
    (agentclass === 'technician' && equipmenttype === 'E') ||
    (agentclass === 'spy' && equipmenttype === 'S')
  ) {
    let useCheck = Math.random() > 0.10;
    return useCheck;
  } else {
    let useCheck = Math.random() > 0.20;
    return useCheck;
  }
}

export default equipmentUseCheck;
