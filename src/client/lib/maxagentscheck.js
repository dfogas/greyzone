/* Number [String] -> Boolean
  checks number of agents against max agents allowed by capability enhancement
*/

function maxAgentsCheck(limit, enhancementnames) {
  if (limit + 1 <= 6 && enhancementnames.indexOf('Operation I.') !== -1)
    return true;
  if (limit + 1 <= 7 && enhancementnames.indexOf('Operation II.') !== -1)
    return true;
  if (limit + 1 <= 8 && enhancementnames.indexOf('Good Label') !== -1)
    return true;
  if (limit + 1 <= 9 && enhancementnames.indexOf('Higher Level') !== -1)
    return true;
  if (limit + 1 <= 10 && enhancementnames.indexOf('Top Class') !== -1)
    return true;
  else
    return false;
}

export default maxAgentsCheck;
