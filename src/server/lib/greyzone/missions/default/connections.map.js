/* eslint camelcase: 0 */
import {monitor, tap, decipher, puppet, infiltrate, hide, improv_el, improv_st} from '../actions';

const ConnectionsMap = [{
    title: 'Connections Map',
    tasks: [
      [monitor, tap, decipher],
      [monitor],
      [infiltrate, hide]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 5,
      reputation: 50
    },
    losses: {
      gameCash: 500,
      gameContacts: 3
    },
    imgsrc: 'chinese.jpg',
    agentLimit: 3,
    tier: 1
  }, {
    title: 'Connections Map',
    tasks: [
      [monitor, tap, decipher],
      [monitor, improv_el, puppet],
      [infiltrate, hide]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 25,
      reputation: 100
    },
    losses: {
      gameCash: 1500,
      gameContacts: 15
    },
    imgsrc: 'chinese.jpg',
    agentLimit: 3,
    tier: 2
  }, {
    title: 'Connections Map',
    tasks: [
      [monitor, tap, decipher],
      [monitor, tap, puppet],
      [infiltrate, hide, improv_st],
      [improv_st]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 125,
      reputation: 150
    },
    losses: {
      gameCash: 4500,
      gameContacts: 75
    },
    imgsrc: 'chinese.jpg',
    agentLimit: 3,
    tier: 3
  }, {
    title: 'Connections Map',
    tasks: [
      [monitor, tap, decipher],
      [monitor, improv_el, puppet, improv_st],
      [infiltrate, hide, improv_st],
      [improv_st]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 625,
      reputation: 200
    },
    losses: {
      gameCash: 13500,
      gameContacts: 375
    },
    imgsrc: 'chinese.jpg',
    agentLimit: 3,
    tier: 4
  }, {
    title: 'Connections Map',
    tasks: [
      [monitor, tap, decipher, improv_el],
      [monitor, tap, puppet, improv_st],
      [infiltrate, hide, improv_st],
      [improv_st]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 3125,
      reputation: 250
    },
    losses: {
      gameCash: 62500,
      gameContacts: 1875
    },
    imgsrc: 'chinese.jpg',
    agentLimit: 3,
    tier: 5
  }];

export default ConnectionsMap;
