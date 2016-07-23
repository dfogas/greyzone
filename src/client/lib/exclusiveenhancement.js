/* ImmutableMap (enhancement) => Boolean
  produces either true if enhancement is exclusive or
  false if it is not exclusive
  BML: true
   */

import EnhancementsList from '../../server/lib/greyzone/enhancement.list';

const ExclusiveEnhancements = EnhancementsList.filter(enh => enh.exclusive);

function isExclusiveEnhancement(enhancement) {
  if (ExclusiveEnhancements.map(enh => enh.name).indexOf(enhancement.get('name')) !== -1)
    return true;
  else
    return false;
}

export default isExclusiveEnhancement;
