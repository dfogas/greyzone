/* ActiveMission(ImmutableMap) Agent(ImmutableMap) -> Experience(Number) */
import prop from '../general/r.i.prop';

const experienceGain = function(activemission, agentontask) {
  return Math.round(
    ((
      (prop('tier', activemission) * 3) / prop('rank', agentontask)
    ) * 15) * Math.pow(Math.E, activemission.getIn(['tasks', activemission.get('taskscompleted').size - 1]).size - 2)
  );
};

export default experienceGain;
