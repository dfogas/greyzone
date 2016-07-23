/* Immutable.List -> Number
  checks capabilityEnhancements and returns number of max missions
  BML: true
*/

function maxMissionsCount(enhancements) {
  const enhancementnames = enhancements.filter(enh => enh.get('type') === 'capability').map(enh => enh.get('name')).toJS();
  if (enhancementnames.indexOf('Top Class') !== -1)
    return 12;
  if (enhancementnames.indexOf('Higher Level') !== -1)
    return 10;
  if (enhancementnames.indexOf('Good Label') !== -1)
    return 8;
  if (enhancementnames.indexOf('Operation II.') !== -1)
    return 6;
  if (enhancementnames.indexOf('Operation I.') !== -1)
    return 4;
  else
    return 2;
}

export default maxMissionsCount;
