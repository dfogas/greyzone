/*
  Enhancements and Missions
  Deputy of Law - Catch Serial Killer
  Puppeteering FBI - Next On The Blacklist
  Augean Stables - Assasination
  Nostalgia - Bank Robbery
  Side Quest - An Old Debt
  We Got the Power - Prison Break
  Repaying the favors - Protect Witness
  Gala in Opera house - A Friend in the Inner Circle
  Boy with an Apple - Private Collection
  You can't see me - Destroy Evidence
  WS intrigues - Industrial Espionage
  Playing Detective - Secret Investigation
*/

import AFriendInInnerCircle from '../../../server/lib/greyzone/missions/a.friend.in.inner.circle';
import AnOldDebt from '../../../server/lib/greyzone/missions/an.old.debt';
// import Assasination from '../../../server/lib/greyzone/missions/assasination';
import BankRobbery from '../../../server/lib/greyzone/missions/bank.robbery';
// import CatchSerialKiller from '../../../server/lib/greyzone/missions/catch.serial.killer';
import DestroyEvidence from '../../../server/lib/greyzone/missions/destroy.evidence';
// import IndustrialEspionage from '../../../server/lib/greyzone/missions/industrial.espionage';
// import NextOnTheBlacklist from '../../../server/lib/greyzone/missions/next.on.the.blacklist';
import PrisonBreak from '../../../server/lib/greyzone/missions/prison.break';
// import PrivateCollection from '../../../server/lib/greyzone/missions/private.collection';
// import SecretInvestigation from '../../../server/lib/greyzone/missions/secret.investigation';
import SilenceWitness from '../../../server/lib/greyzone/missions/silence.witness';

/* Array -> Array
  this is relic and used by debug now for focus (determining focus lib as well)
  BML: true
*/
function xmissioncheck(enhancementsnames, MissionsList) {
  let missionsList;
  missionsList = MissionsList;
  // if (enhancementsnames.indexOf('Deputy of Law') !== -1)
  //   missionsList = missionsList.concat(CatchSerialKiller);
  // if (enhancementsnames.indexOf('Puppeteering FBI') !== -1)
  //   missionsList = missionsList.concat(NextOnTheBlacklist);
  // if (enhancementsnames.indexOf('Augean Stables') !== -1)
  //   missionsList = missionsList.concat(Assasination);
  if (enhancementsnames.indexOf('Nostalgia') !== -1)
    missionsList = missionsList.concat(BankRobbery);
  if (enhancementsnames.indexOf('Side Quest') !== -1)
    missionsList = missionsList.concat(AnOldDebt);
  if (enhancementsnames.indexOf('We Got the Power') !== -1)
    missionsList = missionsList.concat(PrisonBreak);
  if (enhancementsnames.indexOf('Gala in Opera house') !== -1)
    missionsList = missionsList.concat(AFriendInInnerCircle);
  // if (enhancementsnames.indexOf('Boy with an Apple') !== -1)
  //   missionsList = missionsList.concat(PrivateCollection);
  if (enhancementsnames.indexOf('You can\'t see me') !== -1)
    missionsList = missionsList.concat(DestroyEvidence);
  // if (enhancementsnames.indexOf('WS intriques') !== -1)
  //   missionsList = missionsList.concat(IndustrialEspionage);
  // if (enhancementsnames.indexOf('Playing Detective') !== -1)
  //   missionsList = missionsList.concat(SecretInvestigation);
  if (enhancementsnames.indexOf('Repaying the favor') !== -1)
    missionsList = missionsList.concat(SilenceWitness);
  return missionsList;
}

export default xmissioncheck;
