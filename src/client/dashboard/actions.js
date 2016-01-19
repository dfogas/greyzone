import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import Agent from '../../server/lib/greyzone/agents.generator';
import MissionsList from '../lib/missiontiers';
import randomInt from '../lib/getrandomint';

import {gameCursor} from '../state';

export function acceptMission(missiontier) {
  const missionsPerTier = MissionsList.filter(mission => mission.tier === missiontier);

  dispatch(acceptMission, {message: missionsPerTier[randomInt(0, missionsPerTier.length)]});
}

export function bookAgentPrice(rank) {
  const agentPrice = gameCursor(['globals', 'constants', 'agentPriceList', JSON.stringify(rank)]);

  dispatch(bookAgentPrice, {message: agentPrice});
}

export function bookMissionPrice(missiontier) {
  const missionPrice = gameCursor(['globals', 'constants', 'missionsPriceList', JSON.stringify(missiontier)]);
  dispatch(bookMissionPrice, {message: missionPrice});
}

export function hidePlayersWindow() {
  dispatch(hidePlayersWindow, {});
}

export function hireAgent(character, rank) {
  const agent = Agent(character, rank);

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
      dispatch(newUserAppendState, {userId, email, organization});
    });
}

export function pointerChange(whereto) {
  dispatch(pointerChange, {message: whereto});
}

setToString('dashboard', {
  acceptMission,
  bookAgentPrice,
  bookMissionPrice,
  hidePlayersWindow,
  hireAgent,
  newUserAppendState,
  pointerChange
});
