/* eslint camelcase: 0 */
import {monitor, tap, decipher, puppet, infiltrate, hide, improv_el, improv_st} from '../actions';

const tag = 'connectionsmap';
const title = 'Connections Map';
const imgsrc = 'ConnectionsMap.jpg';
const sound = 'ConnectionsMap.ogg';

const ConnectionsMap = [{
    title: title,
    tasks: [
      [monitor, tap, decipher],
      [monitor],
      [infiltrate, hide]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 25
    },
    losses: {
      gameCash: 2500
    },
    imgsrc: imgsrc,
    sound: sound,
    agentLimit: 3,
    tier: 1,
    tag: tag
  }, {
    title: title,
    tasks: [
      [monitor, tap, decipher],
      [monitor, improv_el, puppet],
      [infiltrate, hide]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 125
    },
    losses: {
      gameCash: 12500
    },
    imgsrc: imgsrc,
    sound: sound,
    agentLimit: 3,
    tier: 2,
    tag: tag
  }, {
    title: title,
    tasks: [
      [monitor, tap, decipher],
      [monitor, tap, puppet],
      [infiltrate, hide, improv_st],
      [improv_st]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 625
    },
    losses: {
      gameCash: 62500
    },
    imgsrc: imgsrc,
    sound: sound,
    agentLimit: 3,
    tier: 3,
    tag: tag
  // }, {
  //   title: 'Connections Map',
  //   tasks: [
  //     [monitor, tap, decipher],
  //     [monitor, improv_el, puppet, improv_st],
  //     [infiltrate, hide, improv_st],
  //     [improv_st]
  //   ],
  //   inCountry: '',
  //   rewards: {
  //     gameContacts: 625,
  //     reputation: 200
  //   },
  //   losses: {
  //     gameCash: 13500,
  //     gameContacts: 375
  //   },
  //   imgsrc: 'chinese.jpg',
  //   agentLimit: 3,
  //   tier: 4
  // }, {
  //   title: 'Connections Map',
  //   tasks: [
  //     [monitor, tap, decipher, improv_el],
  //     [monitor, tap, puppet, improv_st],
  //     [infiltrate, hide, improv_st],
  //     [improv_st]
  //   ],
  //   inCountry: '',
  //   rewards: {
  //     gameContacts: 3125,
  //     reputation: 250
  //   },
  //   losses: {
  //     gameCash: 62500,
  //     gameContacts: 1875
  //   },
  //   imgsrc: 'chinese.jpg',
  //   agentLimit: 3,
  //   tier: 5
  }];

export default ConnectionsMap;
