/* tier(Number) focus(String) country(String) options(Object) enhancements([Enhancements]) missionList([Mission]), countryList([Country])) */

import randomInt from './getrandomint';
import xmissioncheck from './xmissioncheck';
import determineFocus from './determinefocus';
import isFatal from './isfatal';

function missionAccept(tier, focus, country, options, enhancements, countryList, missionsList) {
  const operationsnames = enhancements.filter(enh => enh.type === 'operationsscope').map(enh => enh.name);
  const modifiedMissionsList = xmissioncheck(operationsnames, missionsList);
  const focusedModifiedMissionsList = focus !== 'random' && focus !== 'special' && focus !== 'multiplayer' ?
    modifiedMissionsList.filter(mission => determineFocus(mission.rewards)[focus]) :
    modifiedMissionsList;
  const optionedMissionList = options.avoidfatals ? focusedModifiedMissionsList.filter(mission => !isFatal(mission.losses)) : focusedModifiedMissionsList;
  const missionsPerTier = optionedMissionList.filter(mission => mission.tier === parseInt(tier, 10));
  let randomMission = missionsPerTier[randomInt(0, missionsPerTier.length - 1)];
  if (country !== 'random')
    randomMission.inCountry = country;
  else
    randomMission.inCountry = countryList[randomInt(0, countryList.length - 1)].name;
  randomMission.ETA = Date.now() + (2 * 60 * 60 * 1000) + (10 * 60 * 1000);

  return randomMission;
}

export default missionAccept;
