/* ImmutableList(enhancements) -> ImmutableMap(enhancement)
  takes list of enhancements that player owns and returns enhancement
  that has the highest level asn is of leadership type
  BML: true
  */

import immutable from 'immutable';

function currentLevelLdr(enhancements) {
  const leadershipEnhancements = enhancements.filter(enh => enh.get('type') === 'leadership');

  return leadershipEnhancements.reduce((prev, curr) => {
    if (prev.get('level') > curr.get('level'))
      return prev;
    else
      return curr;
  }, immutable.fromJS({level: 0}));
}

export default currentLevelLdr;
