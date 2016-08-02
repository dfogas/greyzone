/* Number [String] -> Boolean
  checks if there is possible action based on rank of hired/ranked agent
  and players enhancements
  BML: true
*/

function leadershipCheck(rank, enhancementnames) {
  if (rank < 3 && enhancementnames.indexOf('Basic Training') !== -1)
    return true;
  else if (rank < 6 && enhancementnames.indexOf('Crash Course') !== -1)
    return true;
  else if (rank < 8 && enhancementnames.indexOf('Training Grounds') !== -1)
    return true;
  else if (rank < 10 && enhancementnames.indexOf('Focus Training I.') !== -1)
    return true;
  else if (rank < 12 && enhancementnames.indexOf('Focus Training II.') !== -1)
    return true;
  else
    return false;
}

export default leadershipCheck;
