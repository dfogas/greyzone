/*
  tier(Number) focus(String) country(String) options(Object) enhancements([Enhancements]) missionList([Mission]), countryList([Country])) -> JSObject(Mission)
  options mohou být forcefail, randomizeresults
*/

import randomInt from './getrandomint';
import randRes from './randomizeresults';
import xmissioncheck from './xmissioncheck';
import determineFocus from './determinefocus';
import isFatal from './isfatal';
import uuid from './guid';

function character(chance) {
  if (chance < 0.333)
    return 'operative';
  else if (chance < 0.667)
    return 'technician';
  else
    return 'spy';
}

function missionAccept(tier, focus, country, options, enhancements, countryList, missionsList) {
  const modifiedMissionsList = xmissioncheck(enhancements.filter(enh => enh.type === 'operationsscope').map(enh => enh.name), missionsList);
  const focusedModifiedMissionsList = focus !== 'random' && focus !== 'multiplayer' ?
    modifiedMissionsList.filter(mission => determineFocus(mission.rewards)[focus]) :
    modifiedMissionsList;
  const optionedMissionList = options.avoidfatals ? focusedModifiedMissionsList.filter(mission => !isFatal(mission.losses)) : focusedModifiedMissionsList;
  const missionsPerTier = optionedMissionList.filter(mission => mission.tier === parseInt(tier, 10));
  let randomMission = missionsPerTier[randomInt(0, missionsPerTier.length - 1)];
  if (focus === 'agent')
    randomMission = modifiedMissionsList.find(mission => mission.title === 'Agent In Trouble' && mission.tier === tier);
  if (focus === 'bank')
    randomMission = modifiedMissionsList.find(mission => mission.title === 'Bank Robbery' && mission.tier === tier);
  if (focus === 'prison')
    randomMission = modifiedMissionsList.find(mission => mission.title === 'Prison Break' && mission.tier === tier);
  if (country !== 'random')
    randomMission.inCountry = country;
  else
    randomMission.inCountry = countryList[randomInt(0, countryList.length - 1)].name;
  randomMission.ETA = Date.now() + (2 * 60 * 60 * 1000) + (10 * 60 * 1000);
  randomMission.id = uuid() + 'gzm';
  if (randomMission.tag === 'agentintrouble')
    randomMission.rewards.character = character(Math.random());
  randomMission = randRes(randomMission);

  return randomMission;
}

export default missionAccept;
