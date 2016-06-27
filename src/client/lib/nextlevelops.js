/* ImmutableList(enhancements) ImmutableList(enhancementsList) -> ImmutableMap(enhancement) or null
  takes list of enhancements that player owns and returns enhancement that operations
  can be upgraded to or null if it has been maxed out already */
import immutable from 'immutable';

function nextLevelOps(enhancements, list) {
  const capabilityEnhancements = enhancements.filter(enh => enh.get('type') === 'capability');
  const capabilityList = list.filter(item => item.get('type') === 'capability');

  const currentlevel = capabilityEnhancements.reduce((prev, curr) => {
    if (prev.get('level') > curr.get('level'))
      return prev;
    else
      return curr;
  }, immutable.fromJS({level: 0})).get('level');

  const maxlevel = capabilityList.reduce((prev, curr) => {
    if (prev.get('level') > curr.get('level'))
      return prev;
    else
      return curr;
  }, immutable.fromJS({level: 0})).get('level');

  if (currentlevel === maxlevel)
    return null;
  else
    return capabilityList.find(enh => enh.get('level') === currentlevel + 1);
}

export default nextLevelOps;
