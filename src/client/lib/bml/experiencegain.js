/* ActiveMission(ImmutableMap) Agent(ImmutableMap) -> Experience(Number) */
import prop from '../general/r.i.prop'; //

const experienceGain = function(activemission, agentontask) {
  return Math.round(((prop('tier', activemission) * 3) / prop('rank', agentontask)) * 15);
};

export default experienceGain;
