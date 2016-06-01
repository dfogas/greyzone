/* ImmutableMap(Mission) ImmutableList(countrystats) => Boolean
  returns false if either loss or reward would bring obscurity under 0

  else returns true

  special exception for missions that do not have country also returns true
*/

/* eslint no-undefined: 1 */
function obscurityMissionCheck(mission, stats) {
  const missionrewards = mission.get('rewards').toJS();
  const missionlosses = mission.get('losses').toJS();
  const countrystat = mission.get('inCountry') ? stats.find(stat => stat.get('name') === mission.get('inCountry')).toJS() : {obscurity: 0};

  // TODO: this needs to be tested properly
  if (countrystat.obscurity + missionrewards.obscurity < 0)
    return false;
  else if (countrystat.obscurity - missionlosses.obscurity < 0)
    return false;
  else
    return true;
}

export default obscurityMissionCheck;
