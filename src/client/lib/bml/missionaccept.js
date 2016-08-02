/*
  focus(String) country(String) options(Object) ImMap(jsonapi) ImList(missions), ImList(countries) -> JSObject(Mission)
  options mohou být forcefail, randomizeresults
  TODO: refactor
  BML: true
*/

import randomInt from '../getrandomint';
import randRes from './randomizeresults';
import xmissioncheck from './xmissioncheck';
import determineFocus from './determinefocus';
import isFatal from './isfatal';
import Mission from '../../../server/lib/greyzone/mission.generator';
import uuid from '../guid';

function character(chance) {
  if (chance < 0.333)
    return 'operative';
  else if (chance < 0.667)
    return 'technician';
  else
    return 'spy';
}

function missionAccept(focus, country, options, jsonapi, countryList, missionsList) {
  const enhancements = jsonapi.get('enhancements');
  const tier = enhancements.filter(enh => enh.get('type') === 'capability').size;
  // declarations
  let randomMission;
  const modifiedMissionsList = xmissioncheck(enhancements.filter(enh => enh.get('type') === 'operationsscope').map(enh => enh.get('name')), missionsList.toJS());
  // console.log(modifiedMissionsList);
  const focusedModifiedMissionsList = focus !== 'random' && focus !== 'multiplayer' ?
    missionsList.toJS().filter(mission => determineFocus(mission.rewards)[focus]) :
    missionsList.toJS();
  const optionedMissionList = options.avoidfatals ? focusedModifiedMissionsList.filter(mission => !isFatal(mission.losses, mission.rewards)) : focusedModifiedMissionsList;
  const missionsPerTier = optionedMissionList.filter(mission => mission.tier === parseInt(tier, 10));

  // checking for special focus
  if (focus === 'agent')
    randomMission = modifiedMissionsList.find(mission => mission.tag === 'agentintrouble' && mission.tier === tier);
  if (focus === 'bank')
    randomMission = modifiedMissionsList.find(mission => mission.tag === 'bankrobbery' && mission.tier === tier);
  if (focus === 'prison')
    randomMission = modifiedMissionsList.find(mission => mission.tag === 'prisonbreak' && mission.tier === tier);
  if (focus === 'olddebt')
    randomMission = modifiedMissionsList.find(mission => mission.tag === 'anolddebt' && mission.tier === tier);
  if (focus === 'rattedout')
    randomMission = Mission('Discovered!', tier, (10 * 60 * 1000), true);
  if (focus === 'evidence')
    randomMission = modifiedMissionsList.find(mission => mission.tag === 'destroyevidence' && (mission.tier === (tier || 3)));
  if (focus === 'killrat')
    randomMission = modifiedMissionsList.find(mission => mission.tag === 'silencewitness' && (mission.tier === (tier || 3)));
  if (focus === 'innercircle')
    randomMission = modifiedMissionsList.find(mission => mission.tag === 'afriendininnercircle' && (mission.tier === (tier || 3)));

  if (randomMission) {
    if (country && country !== 'random')
      randomMission.inCountry = country;
    else
      randomMission.inCountry = countryList.getIn([randomInt(0, countryList.size - 1), 'name']);
    randomMission.ETA = Date.now() + randomInt(1, 6) * (10 * 60 * 1000);
    if (randomMission.tag === 'discovered')
      randomMission.ETA = Date.now() + (10 * 60 * 1000);
    if (randomMission.tag === 'agentintrouble')
      randomMission.rewards.character = character(Math.random());
    randomMission.id = uuid() + 'gzm';
    return randomMission;
  } else {
    randomMission = missionsPerTier[randomInt(0, missionsPerTier.length - 1)];
    if (country && country !== 'random')
      randomMission.inCountry = country;
    else
      randomMission.inCountry = countryList.getIn([randomInt(0, countryList.size - 1), 'name']);
    randomMission.ETA = Date.now() + randomInt(1, 6) * (10 * 60 * 1000);
    randomMission.id = uuid() + 'gzm';
    if (randomMission.tag === 'agentintrouble')
      randomMission.rewards.character = character(Math.random());
    randomMission = randRes(randomMission);
    return randomMission;
  }
}

export default missionAccept;
