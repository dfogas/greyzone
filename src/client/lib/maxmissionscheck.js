/* Number [String] -> Boolean
  checks current number of missions against max missions allowed by capability enhancement
*/
import EnhancementList from '../../server/lib/greyzone/enhancement.list';

//TODO: implement SPoC
// const capabilityEnhancements = EnhancementList.filter(enh => enh.type === 'capability');

function maxMissionsCheck(size, enhancementnames) {
  if (size + 1 <= 4 && enhancementnames.indexOf('Operation I.') !== -1)
    return true;
  if (size + 1 <= 6 && enhancementnames.indexOf('Operation II.') !== -1)
    return true;
  if (size + 1 <= 8 && enhancementnames.indexOf('Good Label') !== -1)
    return true;
  if (size + 1 <= 10 && enhancementnames.indexOf('Higher Level') !== -1)
    return true;
  if (size + 1 <= 12 && enhancementnames.indexOf('Top Class') !== -1)
    return true;
  else
    return false;
}

export default maxMissionsCheck;
