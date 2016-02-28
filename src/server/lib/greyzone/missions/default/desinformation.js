/* eslint camelcase: 0 */
import {puppet, improv_st, decipher, hide, improv_el, improv_op} from '../actions';

const Desinformation = [{
    title: 'Desinformation',
    tasks: [
      [puppet, improv_st],
      [decipher, hide]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 8,
      obscurity: 0.1
    },
    losses: {
      agentImprisoned: true,
      gameContacts: 3
    },
    imgsrc: 'marceullus.jpg',
    agentLimit: 1,
    tier: 1
  }, {
    title: 'Desinformation',
    tasks: [
      [puppet, improv_st, improv_st],
      [decipher, hide]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 24,
      obscurity: 0.15
    },
    losses: {
      agentImprisoned: true,
      gameContacts: 9
    },
    imgsrc: 'marceullus.jpg',
    agentLimit: 1,
    tier: 2
  }, {
    title: 'Desinformation',
    tasks: [
      [puppet, improv_st, improv_st],
      [decipher, hide],
      [improv_op]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 48,
      obscurity: 0.2
    },
    losses: {
      agentImprisoned: true,
      gameContacts: 18
    },
    imgsrc: 'marceullus.jpg',
    agentLimit: 1,
    tier: 3
  }, {
    title: 'Desinformation',
    tasks: [
      [puppet, improv_st, improv_st],
      [decipher, hide, improv_el],
      [improv_op]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 72,
      obscurity: 0.25
    },
    losses: {
      agentImprisoned: true,
      gameContacts: 27
    },
    imgsrc: 'marceullus.jpg',
    agentLimit: 1,
    tier: 4
  }, {
    title: 'Desinformation',
    tasks: [
      [puppet, improv_st, improv_st],
      [decipher, hide, improv_el],
      [improv_op],
      [puppet, improv_st, improv_st]
    ],
    inCountry: '',
    rewards: {
      gameContacts: 96,
      obscurity: 0.3
    },
    losses: {
      agentImprisoned: true,
      gameContacts: 36
    },
    imgsrc: 'marceullus.jpg',
    agentLimit: 1,
    tier: 5
  }];

export default Desinformation;
