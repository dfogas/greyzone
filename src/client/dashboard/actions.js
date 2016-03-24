/* Dashboard Actions */
import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import cconfig from '../client.config';
import Agent from '../../server/lib/greyzone/agents.generator';
import MissionsList from '../../server/lib/greyzone/missions.list';
import randomInt from '../lib/getrandomint';
import xmissioncheck from '../lib/xmissioncheck';

import {gameCursor} from '../state';
import {jsonapiCursor} from '../state';
import leadershipCheck from '../lib/leadershipcheck';
import maxAgentsCheck from '../lib/maxagentscheck';
import CountryList from '../../server/lib/greyzone/country.list';
import EnhancementList from '../../server/lib/greyzone/enhancement.list';
import StatusesList from '../../server/lib/greyzone/status.list';

export function acceptMission(missiontier) {
  const enhancements = jsonapiCursor(['enhancements']).toJS();
  const enhancementnames = enhancements.filter(enh => enh.type === 'operationsscope').map(enh => enh.name);
  const modifiedMissionsList = xmissioncheck(enhancementnames, MissionsList);
  const missionsPerTier = modifiedMissionsList.filter(mission => mission.tier === missiontier);
  let randomMission = missionsPerTier[randomInt(0, missionsPerTier.length - 1)];
  randomMission.inCountry = CountryList[randomInt(0, CountryList.length - 1)].name;
  randomMission.ETA = Date.now() + (2 * 60 * 60 * 1000) + (10 * 60 * 1000);

  dispatch(acceptMission, {mission: randomMission});
}

export function bookAgentPrice(rank) {
  const agentPriceList = gameCursor(['globals', 'constants', 'agentsPriceList']).toJS();
  const agentPrice = agentPriceList[rank];
  const enhancements = jsonapiCursor(['enhancements']).toJS();
  const enhancementnames = enhancements.filter(enh => enh.type === 'leadership').map(enh => enh.name);
  if (leadershipCheck(rank - 1, enhancementnames))
    dispatch(bookAgentPrice, {message: agentPrice});
}

export function bookMissionPrice(missiontier) {
  const missionPrice = gameCursor(['globals', 'constants', 'missionsPriceList', JSON.stringify(missiontier)]);

  dispatch(bookMissionPrice, {message: missionPrice});
}

export function buyEnhancement({target}) {
  const enhancement = EnhancementList.filter(enhancement => enhancement.name === target.parentNode.childNodes[0].innerHTML)[0];
  const enhancements = jsonapiCursor(['enhancements']).toJS();
  const enhancementcapabilitynames = enhancements.filter(enh => enh.type === 'capability').map(enh => enh.name);
  if (enhancementcapabilitynames.indexOf('Good Label') === -1 && enhancement.type === 'operationsscope')
    dispatch(log, {message: 'You need to upgrade operation to Good Label, before enhancing your operations scope.'});
  else
    dispatch(buyEnhancement, {message: enhancement});
}

export function buyStatus({target}) {
  const status = StatusesList.filter(status => status.name === target.parentNode.childNodes[0].innerHTML)[0];
  dispatch(buyStatus, {message: status});
}

export function clearAgentHireFields(rank) {
  dispatch(clearAgentHireFields, {});
}

export function hireAgent(specialist, rank) {
  const agent = Agent(specialist, rank);
  const leadershipNames = jsonapiCursor(['enhancements']).toJS().filter(enh => enh.type === 'leadership').map(enh => enh.name);
  const capabilityNames = jsonapiCursor(['enhancements']).toJS().filter(enh => enh.type === 'capability').map(enh => enh.name);

  if (!maxAgentsCheck(jsonapiCursor(['agents']).size, capabilityNames))
    dispatch(logAgentsWindow, {message: 'Max agents reached already. Dismiss an agent if you want to hire new one.'});
  else if (!leadershipCheck(rank - 1, leadershipNames))
    dispatch(logAgentsWindow, {message: 'Upgrade leadership facility to recruit and train agents of higher ranks.'});
  else
    dispatch(hireAgent, {agent});
}

export function log(message) {
  dispatch(log, {message});
}

export function logAgentsWindow(message) {
  dispatch(logAgentHire, {message});
}

export function newUserAppendState(email, organization) {
  const api = process.env.NODE_ENV === 'production' ?
    cconfig.dnsprod + '/api/v1/' :
    cconfig.dnsdevel + '/api/v1/';
  fetch(api + 'users', {
    method: 'GET',
    headers: {'Content-type': 'application/json'}
  })
    .then((res) => {
      if (res.status >= 400)
        throw new Error('Bad server response.');
      return res.json();
    })
    .then((users) => {
      let userId = users.filter(user => user.username === email).map(user => user._id);
      console.log(userId[0]);
      return userId[0];
    })
    .then((userId) => {
      fetch(api + 'players', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({userId: userId, name: organization})
      });
    });
}

export function pointerChange(whereto) {
  dispatch(pointerChange, {message: whereto});
}

export function updateFormField({name, value}) {
  // Both email and password max length is 100.
  value = value.slice(0, 100);
  dispatch(updateFormField, {name, value});
}

export function upgradeEnhancement(enhancement) {
  if (enhancement)
    dispatch(upgradeEnhancement, {enhancement});
}

setToString('dashboard', {
  acceptMission,
  bookAgentPrice,
  bookMissionPrice,
  buyEnhancement,
  buyStatus,
  clearAgentHireFields,
  hireAgent,
  log,
  logAgentsWindow,
  newUserAppendState,
  pointerChange,
  updateFormField,
  upgradeEnhancement
});
