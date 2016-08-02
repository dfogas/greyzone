/* ImmutableMap(enhancement) ImmutableList(enhancements) => Boolean
  produces either true if enhancement is exclusive or
  false if it is not exclusive
  BML: true
   */

const isExclusiveEnhancement = function(enhancement, list) {
  const ExclusiveEnhancements = list.filter(enh => enh.get('exclusive'));
  if (ExclusiveEnhancements.map(enh => enh.get('name')).indexOf(enhancement.get('name')) !== -1)
    return true;
  else
    return false;
};

export default isExclusiveEnhancement;
