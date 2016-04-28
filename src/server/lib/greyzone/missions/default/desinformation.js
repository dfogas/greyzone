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
      gameContacts: 25
    },
    losses: {
      obscurity: 0.05
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
      gameContacts: 100
    },
    losses: {
      obscurity: 0.2
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
      gameContacts: 400
    },
    losses: {
      obscurity: 0.8
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
  // }, {
  //   title: 'Desinformation',
  //   tasks: [
  //     [puppet, improv_st, improv_st],
  //     [decipher, hide, improv_el],
  //     [improv_op],
  //     [puppet, improv_st, improv_st]
  //   ],
  //   inCountry: '',
  //   rewards: {
  //     gameContacts: 96,
  //     obscurity: 0.3
  //   },
  //   losses: {
  //     agentImprisoned: true,
  //     gameContacts: 36
  //   },
  //   imgsrc: 'marceullus.jpg',
  //   agentLimit: 1,
  //   tier: 5
  }];

export default Desinformation;
