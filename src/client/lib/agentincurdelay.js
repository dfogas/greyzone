/*
  immutableMap(Agent) immutableMap(Equipment) Number(timeinms) -> Number(ETA)
  ETA in UNIX time
  intent of this function is to detect whether equipment in question is heavy
  and agent specialization then check actual delay and based on that
  infer time in which the agent will be available for action again
*/

function agentIncurDelay(agent, equipment, delay) {
  const agentclass = agent.get('specialist');
  const equipmenttype = equipment.get('tag').slice(2);

  if (!equipment.get('heavy'))
    return agent.get('ETA');
  else if (
    (agentclass === 'operative' && equipmenttype === 'O') ||
    (agentclass === 'technician' && equipmenttype === 'E') ||
    (agentclass === 'spy' && equipmenttype === 'S')
  ) {
    const isBackfire = Math.random() > 0.25 ? false : true;
    if (isBackfire && agent.get('ETA') <= Date.now())
      return Date.now() + delay;
    else if (isBackfire)
      return agent.get('ETA') + delay;
    else
      return agent.get('ETA');
  } else {
    const isBackfire = Math.random() > 0.5 ? false : true;
    if (isBackfire && agent.get('ETA') < Date.now())
      return Date.now() + delay;
    else if (isBackfire)
      return agent.get('ETA') + delay;
    else
      return agent.get('ETA');
  }

}

export default agentIncurDelay;
