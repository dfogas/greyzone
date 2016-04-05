/* Number [String] -> Boolean
  checks if there is possible action based on tier of accepted mission
  and players enhancements
*/

function capabilityCheck(tier, enhancementnames) {
  if (tier === 1 && enhancementnames.indexOf('Operation I.') !== -1)
    return true;
  else if (tier === 2 && enhancementnames.indexOf('Operation II.') !== -1)
    return true;
  else if (tier === 3 && enhancementnames.indexOf('Good Label') !== -1)
    return true;
  else if (tier === 4 && enhancementnames.indexOf('Higher Level') !== -1)
    return true;
  else if (tier === 5 && enhancementnames.indexOf('Top Class') !== -1)
    return true;
  else
    return false;
}

export default capabilityCheck;
