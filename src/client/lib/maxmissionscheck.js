/* Number [String] -> Boolean
  checks current number of missions against max missions allowed by capability enhancement if room for mission returns true
  BML: true
*/

var maxMissionsCheck = function(jsonapi) {
  const size = jsonapi.get('missions').size;
  const enhancements = jsonapi.get('enhancements').filter(enh => enh.get('type') === 'capability');

  // console.log(size);
  // console.log(enhancements.size);

  if (size + 1 <= 2 && enhancements.size >= 1)
    return true;
  if (size + 1 <= 4 && enhancements.size >= 2)
    return true;
  if (size + 1 <= 6 && enhancements.size >= 3)
    return true;
  if (size + 1 <= 8 && enhancements.size >= 4)
    return true;
  if (size + 1 <= 10 && enhancements.size >= 5)
    return true;
  else
    return false;
};

export default maxMissionsCheck;
