/* Agent(ImmutableMap) Equipment(ImmutableMap) -> Boolean */

const isEquipmentBackfire = function(agent, equipment) {
  const agentclass = agent.get('specialist');
  const equipmenttype = equipment.get('tag').slice(2);

  if (!equipment.get('heavy'))
    return false;
  else if (
    (agentclass === 'operative' && equipmenttype === 'O') ||
    (agentclass === 'technician' && equipmenttype === 'E') ||
    (agentclass === 'spy' && equipmenttype === 'S')
  ) {
    let isBackfire = Math.random() > 0.25 ? false : true;
    return isBackfire;
  } else {
    let isBackfire = Math.random() > 0.5 ? false : true;
    return isBackfire;
  }
};

export default isEquipmentBackfire;
