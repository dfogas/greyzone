/* immutableMap(Agent) immutableMap(Equipment) Number(timeinms) -> Number(ETA)
  ETA in UNIX time
*/

function agentIncurDelay(agent, equipment, delay) {
  const agentclass = agent.get('specialist');
  const equipmenttype = equipment.get('tag').slice(2);

  if (
    (agentclass === 'operative' && equipmenttype === 'O') ||
    (agentclass === 'technician' && equipmenttype === 'E') ||
    (agentclass === 'spy' && equipmenttype === 'S')
  ) {
    const isBackfire = Math.random() > 0.25 ? false : true;
    console.log(isBackfire + ' specialist branch.');
    if (isBackfire && agent.get('ETA') + delay <= Date.now())
      return Date.now() + delay;
    else if (isBackfire)
      return agent.get('ETA') + delay;
    else
      return Date.now();
  } else {
    const isBackfire = Math.random() > 0.5 ? false : true;
    console.log(isBackfire + ' non-specialist branch.');
    if (isBackfire && agent.get('ETA') + delay < Date.now())
      return Date.now() + delay;
    else if (isBackfire)
      return agent.get('ETA') + delay;
    else
      return Date.now();
  }

}

export default agentIncurDelay;
