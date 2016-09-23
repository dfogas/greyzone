/* ActiveMission(ImmutableMap) Agent(ImmutableMap) */

const experienceGain = function(activemission, agentontask) {
  return Math.round(((activemission.get('tier') * 3) / agentontask.get('rank')) * 15);
};

export default experienceGain;
