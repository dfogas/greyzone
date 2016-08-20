/* ImmutableMap(activemission) => String(CSS for boxShadow property) */

const missionBoxShadow = function(mission) {//
  if (mission.get('tag') === 'desinformation')
    return 'inset 0 0 500px sandybrown';
  else if (mission.get('tag') === 'agentintrouble')
    return 'inset 0 0 500px black';
  else if (mission.get('tag') === 'connectionsmap')
    return 'inset 0 0 500px grey';
  else if (mission.get('tag') === 'demonstrationofpower')
    return 'inset 0 0 500px darkred';
  else if (mission.get('tag') === 'discovered')
    return 'inset 0 0 500px black';
  else if (mission.get('tag') === 'prisonbreak')
    return 'inset 0 0 500px grey';
  else return 'inset 0 0 500px darkblue';
};

export default missionBoxShadow;
