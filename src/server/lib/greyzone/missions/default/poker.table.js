/* eslint camelcase: 0 */
import {decipher, improv_el, tap, close_combat, improv_op, pursuit, infiltrate} from '../actions';

const tag = 'pokertable';
const title = 'Poker Table';
const imgsrc = 'PokerTable.jpg';
const sound = 'PokerTable.ogg';

const PokerTable = [{
    title: title,
    tasks: [
      [decipher, decipher, improv_el],
      [tap, improv_el]
    ],
    inCountry: '',
    rewards: {
      gameCash: 2500
    },
    losses: {
      gameCash: 2500
    },
    imgsrc: imgsrc,
    sound: sound,
    agentLimit: 2,
    tier: 1,
    tag: tag
  }, {
    title: title,
    tasks: [
      [decipher, decipher, improv_el],
      [tap, improv_el, improv_op],
      [pursuit]
    ],
    inCountry: '',
    rewards: {
      gameCash: 12500
    },
    losses: {
      gameCash: 12500
    },
    imgsrc: imgsrc,
    sound: sound,
    agentLimit: 2,
    tier: 2,
    tag: tag
  }, {
    title: title,
    tasks: [
      [decipher, decipher, improv_el],
      [tap, improv_el, close_combat],
      [pursuit, improv_op]
    ],
    inCountry: '',
    rewards: {
      gameCash: 62500
    },
    losses: {
      gameCash: 62500
    },
    imgsrc: imgsrc,
    sound: sound,
    agentLimit: 2,
    tier: 3,
    tag: tag
  }, {
    title: title,
    tasks: [
      [decipher, decipher, improv_el],
      [tap, improv_el, close_combat, improv_op],
      [pursuit, improv_op],
      [infiltrate]
    ],
    inCountry: '',
    rewards: {
      gameCash: 125000
    },
    losses: {
      gameCash: 125000
    },
    imgsrc: imgsrc,
    sound: sound,
    agentLimit: 2,
    tag: tag,
    tier: 4
  }, {
    title: title,
    tasks: [
      [decipher, decipher, improv_el],
      [tap, improv_el, close_combat, improv_op],
      [pursuit, improv_op, improv_op],
      [infiltrate]
    ],
    inCountry: '',
    rewards: {
      gameCash: 250000
    },
    losses: {
      gameCash: 250000
    },
    imgsrc: imgsrc,
    sound: sound,
    agentLimit: 2,
    tag: tag,
    tier: 5
  }];

export default PokerTable;
