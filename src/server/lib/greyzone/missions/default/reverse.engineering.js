/* eslint camelcase: 0 */
import {decipher, improv_el, tap, close_combat, improv_op, pursuit, infiltrate} from '../actions';

const ReverseEngineering = [{
    title: 'Reverse Engineering',
    tasks: [
      [decipher, decipher, improv_el],
      [tap, improv_el]
    ],
    inCountry: '',
    rewards: {
      gameCash: 500
    },
    losses: {
      gameCash: 200
    },
    imgsrc: 'entrap2.jpg',
    agentLimit: 2,
    tier: 1
  }, {
    title: 'Reverse Engineering',
    tasks: [
      [decipher, decipher, improv_el],
      [tap, improv_el, improv_op],
      [pursuit]
    ],
    inCountry: '',
    rewards: {
      gameCash: 2500
    },
    losses: {
      gameCash: 1000
    },
    imgsrc: 'entrap2.jpg',
    agentLimit: 2,
    tier: 2
  }, {
    title: 'Reverse Engineering',
    tasks: [
      [decipher, decipher, improv_el],
      [tap, improv_el, close_combat],
      [pursuit, improv_op]
    ],
    inCountry: '',
    rewards: {
      gameCash: 12500
    },
    losses: {
      gameCash: 2500
    },
    imgsrc: 'entrap2.jpg',
    agentLimit: 2,
    tier: 3
  }, {
    title: 'Reverse Engineering',
    tasks: [
      [decipher, decipher, improv_el],
      [tap, improv_el, close_combat, improv_op],
      [pursuit, improv_op],
      [infiltrate]
    ],
    inCountry: '',
    rewards: {
      gameCash: 62500
    },
    losses: {
      gameCash: 12500
    },
    imgsrc: 'entrap2.jpg',
    agentLimit: 2,
    tier: 4
  }, {
    title: 'Reverse Engineering',
    tasks: [
      [decipher, decipher, improv_el],
      [tap, improv_el, close_combat, improv_op],
      [pursuit, improv_op, improv_op],
      [infiltrate]
    ],
    inCountry: '',
    rewards: {
      gameCash: 325000
    },
    losses: {
      gameCash: 62500
    },
    imgsrc: 'entrap2.jpg',
    agentLimit: 2,
    tier: 5
  }];

export default ReverseEngineering;
