/* ImmutableList(enhancements) -> ImmutableMap(enhancement)
  takes list of enhancements that player owns and returns enhancement that has the highest level and is of capability type
  BML: true
  */
import immutable from 'immutable';

function currentLevelOps(enhancements) {
  const capabilityEnhancements = enhancements.filter(enh => enh.get('type') === 'capability');

  return capabilityEnhancements.reduce((prev, curr) => {
    if (prev.get('level') > curr.get('level'))
      return prev;
    else
      return curr;
  }, immutable.fromJS({level: 0}));
}

export default currentLevelOps;
