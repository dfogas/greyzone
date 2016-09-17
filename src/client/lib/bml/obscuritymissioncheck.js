/* ImmutableMap(Mission) ImmutableList(countrystats) ImmutableList(attention level events) => Boolean
  returns false if either loss or reward would bring obscurity under 0

  else returns true

  special exception for missions that do not have country also returns true

  BML: true
*/

import immutable from 'immutable';

/* eslint no-undefined: 1 */
function obscurityMissionCheck(mission, stats, events, countryofoperation) {
  const missionrewards = mission.get('rewards');
  const missionlosses = mission.get('losses');
  const countrystat = mission.get('inCountry') ? stats.find(stat => stat.get('name') === mission.get('inCountry')) : immutable.fromJS({obscurity: 0});
  const indexAL = events.indexOf(events.find(jsev => jsev.get('country') === countryofoperation));

  function attentionPenalty(attentionlevel) {
    if (attentionlevel === 'high')
      return 0.3;
    else if (attentionlevel === 'mid')
      return 0.2;
    else if (attentionlevel === 'low')
      return 0.1;
    else
      return 0;
  }

  // TODO: this needs to be tested properly
  if (countrystat.get('obscurity') + missionrewards.get('obscurity') - attentionPenalty(events.getIn([indexAL, 'level'])) < 0)
    return false;
  else if (countrystat.get('obscurity') - missionlosses.get('obscurity') - attentionPenalty(events.getIn([indexAL, 'level'])) < 0)
    return false;
  else
    return true;
}

export default obscurityMissionCheck;
