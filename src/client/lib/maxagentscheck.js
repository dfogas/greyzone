/* Number [String] -> Boolean
  checks number of agents against max agents allowed by capability enhancement
*/

import allAgents from './allagents';

// var maxAgentsCheck = function(limit, enhancementnames) {
//   if (limit + 1 <= 5 && enhancementnames.indexOf('Operation I.') !== -1)
//     return true;
//   if (limit + 1 <= 6 && enhancementnames.indexOf('Operation II.') !== -1)
//     return true;
//   if (limit + 1 <= 7 && enhancementnames.indexOf('Good Label') !== -1)
//     return true;
//   if (limit + 1 <= 8 && enhancementnames.indexOf('Higher Level') !== -1)
//     return true;
//   if (limit + 1 <= 9 && enhancementnames.indexOf('Top Class') !== -1)
//     return true;
//   else
//     return false;
// }

/* alternative
  ImmutableMap -> Bolean
*/

var maxAgentsCheck = function(jsonapi) {
  const limit = allAgents(jsonapi).size;
  const enhancements = jsonapi.get('enhancements').filter(enh => enh.get('type') === 'capability');

  console.log(limit);
  console.log(enhancements.size);
  if (limit + 1 <= 5 && enhancements.size >= 1)
    return true;
  if (limit + 1 <= 6 && enhancements.size >= 2)
    return true;
  if (limit + 1 <= 7 && enhancements.size >= 3)
    return true;
  if (limit + 1 <= 8 && enhancements.size >= 4)
    return true;
  if (limit + 1 <= 9 && enhancements.size >= 5)
    return true;
  else
    return false;
};

export default maxAgentsCheck;
