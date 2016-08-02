/* Immutable.List -> Number
  checks capabilityEnhancements and returns number of max missions
  BML: true
*/

function maxMissionsCount(enhancements) {
  const enhancementnames = enhancements.filter(enh => enh.get('type') === 'capability').map(enh => enh.get('name')).toJS();
  if (enhancementnames.indexOf('Top Class') !== -1)
    return 6;
  if (enhancementnames.indexOf('Higher Level') !== -1)
    return 5;
  if (enhancementnames.indexOf('Good Label') !== -1)
    return 4;
  if (enhancementnames.indexOf('Operation II.') !== -1)
    return 3;
  if (enhancementnames.indexOf('Operation I.') !== -1)
    return 2;
  else
    return 1;
}

export default maxMissionsCount;
