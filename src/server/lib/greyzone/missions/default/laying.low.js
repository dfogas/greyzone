/*eslint camelcase: 0*/
import {close_combat, hide, improv_op, improv_st, improv_el, monitor, hit, infiltrate} from '../actions';

const tag = 'layinglow';

const LayingLow = [{
  title: 'Laying Low',
  tasks: [
    [close_combat, hide],
    [hit, improv_op],
    [infiltrate, improv_st, hide]
  ],
  inCountry: '',
  rewards: {
    obscurity: 0.05
  },
  losses: {
    reputation: 50
  },
  imgsrc: 'godfather_free_youtube.jpg',
  agentLimit: 3,
  tier: 1,
  tag: tag
}, {
  title: 'Laying Low',
  tasks: [
    [close_combat, hide, improv_op],
    [hit, improv_op, hit],
    [infiltrate, improv_st, hide]
  ],
  inCountry: '',
  rewards: {
    obscurity: 0.25
  },
  losses: {
    reputation: 250
  },
  imgsrc: 'godfather_free_youtube.jpg',
  agentLimit: 3,
  tier: 2,
  tag: tag
}, {
  title: 'Laying Low',
  tasks: [
    [close_combat, hide, improv_op],
    [improv_el, monitor],
    [hit, improv_op, hit],
    [infiltrate, improv_st, hide]
  ],
  inCountry: '',
  rewards: {
    obscurity: 0.75
  },
  losses: {
    reputation: 1000
  },
  imgsrc: 'godfather_free_youtube.jpg',
  agentLimit: 3,
  tier: 3,
  tag: tag
// }, {
//   title: 'Laying Low',
//   tasks: [
//     [close_combat, hide, improv_op],
//     [improv_el, monitor],
//     [hit, improv_op, hit],
//     [infiltrate, improv_st, hide, puppet]
//   ],
//   inCountry: '',
//   rewards: {
//     gameCash: 2400,
//     reputation: 400
//   },
//   losses: {
//     agentImprisoned: true,
//     reputation: 400,
//     gameCash: 200
//   },
//   imgsrc: 'godfather_free_youtube.jpg',
//   agentLimit: 3,
//   tier: 4
// }, {
//   title: 'Laying Low',
//   tasks: [
//     [close_combat, hide, improv_op, improv_st],
//     [improv_el, monitor, monitor],
//     [hit, improv_op, hit],
//     [infiltrate, improv_st, hide, puppet]
//   ],
//   inCountry: '',
//   rewards: {
//     gameCash: 3000,
//     reputation: 500
//   },
//   losses: {
//     agentImprisoned: true,
//     reputation: 500,
//     gameCash: 200
//   },
//   imgsrc: 'godfather_free_youtube.jpg',
//   agentLimit: 3,
//   tier: 5
}];

export default LayingLow;
