/* JSObject -> JSObject
  randomize results of missions
  TODO: need to expand on this
  BML: true
*/
import getRandomInt from '../lib/getrandomint';

function randRes(mission) {
  if (mission.rewards && Object.keys(mission.rewards).indexOf('gameCash') !== -1 && mission.tag === 'moneychannelling')
    mission.rewards.gameCash *= getRandomInt(1, 5);
  if (mission.rewards && Object.keys(mission.rewards).indexOf('gameContacts') !== -1 && mission.tag === 'moneychannelling')
    mission.rewards.gameContacts *= getRandomInt(1, 5);
  if (mission.losses && Object.keys(mission.losses).indexOf('gameCash') !== -1 && mission.tag === 'moneychannelling')
    mission.losses.gameCash *= getRandomInt(-1, 5);
  if (mission.losses && Object.keys(mission.losses).indexOf('gameContacts') !== -1 && mission.tag === 'moneychannelling')
    mission.losses.gameContacts *= getRandomInt(-1, 5);
  if (mission.tag === 'pokertable') {
    let randNum = getRandomInt(1, 3);
    mission.losses.gameCash *= randNum;
    mission.rewards.gameCash *= randNum;
  }

  return mission;
}

export default randRes;
