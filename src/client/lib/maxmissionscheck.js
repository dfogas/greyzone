/* Number [String] -> Boolean
  checks number of agents against max missions allowed by capability enhancement
*/

function maxAgentsCheck(size, enhancementnames) {
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

export default maxAgentsCheck;
