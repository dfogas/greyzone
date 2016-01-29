import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import Agent from '../../server/lib/greyzone/agents.generator';
import MissionsList from '../lib/missiontiers';
import randomInt from '../lib/getrandomint';

import {gameCursor} from '../state';
import {jsonapiCursor} from '../state';
import leadershipCheck from '../lib/leadershipcheck';
import CountryList from '../../server/lib/greyzone/country.list';
import EnhancementList from '../../server/lib/greyzone/enhancement.list';
import StatusesList from '../../server/lib/greyzone/status.list';

export function acceptMission(missiontier) {
  const missionsPerTier = MissionsList.filter(mission => mission.tier === missiontier);
  let randomMission = missionsPerTier[randomInt(0, missionsPerTier.length - 1)];
  randomMission.inCountry = CountryList[randomInt(0, CountryList.length - 1)].name;

  dispatch(acceptMission, {message: randomMission});
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
  // console.log(target.parentNode.childNodes[0].innerHTML);
  // console.log(enhancement);
  dispatch(buyEnhancement, {message: enhancement});
}

export function buyStatus({target}) {
  const status = StatusesList.filter(status => status.name === target.parentNode.childNodes[0].innerHTML)[0];
  // console.log(status);
  dispatch(buyStatus, {message: status});
}

export function clearAgentHireFields(rank) {
  const enhancements = jsonapiCursor(['enhancements']).toJS();
  const enhancementnames = enhancements.filter(enh => enh.type === 'leadership').map(enh => enh.name);
  if (leadershipCheck(rank - 1, enhancementnames))
    dispatch(clearAgentHireFields, {});
}

export function hidePlayersWindow() {
  dispatch(hidePlayersWindow, {});
}

export function hireAgent(specialist, rank) {
  const agent = Agent(specialist, rank);
  const enhancements = jsonapiCursor(['enhancements']).toJS();
  const enhancementnames = enhancements.filter(enh => enh.type === 'leadership').map(enh => enh.name);
  console.log(enhancementnames);
  if (leadershipCheck(rank - 1, enhancementnames))
    dispatch(hireAgent, {agent});
}

export function newUserAppendState(email, organization) {
  let userId;
  // console.log('newUserAppendState is running');

  const api = process.env.NODE_ENV === 'production' ?
    'http://fierce-shore-7346.herokuapp.com/api/v1/' :
    'http://localhost:8000/api/v1/';
  fetch(api + 'users', {
    method: 'GET',
    headers: {'Content-type': 'application/json'}
  })
    .then((res) => {
      if (res.status >= 400)
        throw new Error('Bad server response.');
        // console.log(res.ok);
        // console.log(res.status);
        // console.log(res.statusText);
        // console.log(res.headers);
        // console.log(res.headers.get('content-type'));
      return res.json();
    })
    .then((users) => {
      userId = users.filter(user => user.username === email).map(user => user._id);
      console.log(userId[0]);
      return userId[0];
      // dispatch(newUserAppendState, {userId, email, organization});
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

export function updateFormField({target: {name, value}}) {
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
  hidePlayersWindow,
  hireAgent,
  newUserAppendState,
  pointerChange,
  updateFormField,
  upgradeEnhancement
});
