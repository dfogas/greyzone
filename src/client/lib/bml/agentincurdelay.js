/* Covered */
/*
  immutableMap(Agent) Number(timeinms) Boolean(isBackfire) -> Number(ETA)
  part of game mechanism where player is booked time costs related to equipment use
  ETA in UNIX time
  intent of this function is to detect whether equipment in question is heavy
  and agent specialization then check actual delay and based on that
  infer time in which the agent will be available for action again
  BML: true
*/

function agentIncurDelay(agent, delay, isBackfire) {
  if (isBackfire && agent.get('ETA') <= Date.now())
    return Date.now() + delay;
  else if (isBackfire)
    return agent.get('ETA') + delay;
  else
    return agent.get('ETA');
}

export default agentIncurDelay;
