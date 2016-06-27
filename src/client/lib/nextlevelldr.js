/* ImmutableList(enhancements) ImmutableList(enhancementsList) -> ImmutableMap(enhancement) or null
  takes list of enhancements that player owns and returns enhancement that agents' training
  can be upgraded to or null if it has been maxed out already */

import immutable from 'immutable';

function nextLevelLdr(enhancements, list) {
  const leadershipEnhancements = enhancements.filter(enh => enh.get('type') === 'leadership');
  const leadershipList = list.filter(item => item.get('type') === 'leadership');

  const currentlevel = leadershipEnhancements.reduce((prev, curr) => {
    if (prev.get('level') > curr.get('level'))
      return prev;
    else
      return curr;
  }, immutable.fromJS({level: 0})).get('level');

  const maxlevel = leadershipList.reduce((prev, curr) => {
    if (prev.get('level') > curr.get('level'))
      return prev;
    else
      return curr;
  }, immutable.fromJS({level: 0})).get('level');

  if (currentlevel === maxlevel)
    return null;
  else
    return leadershipList.find(enh => enh.get('level') === currentlevel + 1);
}

export default nextLevelLdr;
