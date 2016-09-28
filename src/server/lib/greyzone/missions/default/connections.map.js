/* eslint camelcase: 0 */
import {monitor, tap, decipher, puppet, infiltrate, hide, improv_el, improv_st} from '../actions';

const tag = 'connectionsmap';
const title = 'Connections Map';
const imgsrc = 'ConnectionsMap.jpg';
const sound = 'ConnectionsMap.ogg';
const description = `The first thing is to know, who talks to whom and what are the feelings of the groups towards each other.`;

const ConnectionsMap = [{
    title: title,
    tasks: [
      [tap, decipher, improv_el],
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
    description: description,
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
    description: description,
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
    description: description,
    agentLimit: 3,
    tier: 3,
    tag: tag
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
      gameContacts: 625
    },
    losses: {
      gameCash: 62500
    },
    imgsrc: imgsrc,
    sound: sound,
    description: description,
    agentLimit: 3,
    tier: 4,
    tag: tag
  }, {
    title: 'Connections Map',
    tasks: [
      [monitor, tap, decipher, improv_el],
      [monitor, tap, puppet, improv_st],
      [infiltrate, hide, improv_st],
      [improv_st, improv_st]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 1250
    },
    losses: {
      gameCash: 125000
    },
    imgsrc: imgsrc,
    sound: sound,
    description: description,
    agentLimit: 3,
    tier: 5,
    tag: tag
  }];

export default ConnectionsMap;
