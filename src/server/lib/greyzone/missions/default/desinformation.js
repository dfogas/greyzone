/* eslint camelcase: 0 */
import {puppet, improv_st, decipher, hide, improv_op, improv_el} from '../actions';

const tag = 'desinformation';
const title = 'Desinformation';
const imgsrc = 'Desinformation.jpg';
const sound = 'Desinformation.ogg';

const Desinformation = [{
    title: title,
    tasks: [
      [puppet, improv_st],
      [decipher, hide]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 25
    },
    losses: {
      obscurity: 0.05
    },
    imgsrc: imgsrc,
    sound: sound,
    agentLimit: 1,
    tier: 1,
    tag: tag
  }, {
    title: title,
    tasks: [
      [puppet, improv_st, improv_st],
      [decipher, hide]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 100
    },
    losses: {
      obscurity: 0.2
    },
    imgsrc: imgsrc,
    sound: sound,
    agentLimit: 1,
    tier: 2,
    tag: tag
  }, {
    title: title,
    tasks: [
      [puppet, improv_st, improv_st],
      [decipher, hide],
      [improv_op]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 400
    },
    losses: {
      obscurity: 0.3
    },
    imgsrc: imgsrc,
    sound: sound,
    agentLimit: 1,
    tier: 3,
    tag: tag
  }, {
    title: title,
    tasks: [
      [puppet, improv_st, improv_st],
      [decipher, hide, improv_el],
      [improv_op]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 600
    },
    losses: {
      obscurity: 0.5
    },
    imgsrc: imgsrc,
    sound: sound,
    agentLimit: 1,
    tier: 4,
    tag: tag
  }, {
    title: title,
    tasks: [
      [puppet, improv_st, improv_st],
      [decipher, hide, improv_el],
      [improv_op],
      [puppet, improv_st, improv_st]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 800,
    },
    losses: {
      obscurity: 0.7
    },
    imgsrc: imgsrc,
    sound: sound,
    agentLimit: 1,
    tier: 5,
    tag: tag
  }];

export default Desinformation;
