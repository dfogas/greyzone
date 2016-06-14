/* eslint camelcase: 0 */
import {tap, monitor, improv_el, puppet, decipher, improv_st} from '../actions';

const tag = 'moneychannelling';

const MoneyChannelling = [{
  title: 'Money channelling',
  tasks: [
    [tap, monitor],
    [puppet, puppet, tap],
    [decipher, decipher]
  ],
  inCountry: '',
  rewards: {
    gameCash: 1000
  },
  losses: {
    gameContacts: 10
  },
  imgsrc: 'MoneyChannelling.jpg',
  agentLimit: 3,
  tier: 1,
  tag: tag
}, {
  title: 'Money channelling',
  tasks: [
    [tap, monitor, improv_el],
    [puppet, puppet, tap],
    [decipher, decipher]
  ],
  inCountry: '',
  rewards: {
    gameCash: 5000
  },
  losses: {
    gameContacts: 50
  },
  imgsrc: 'MoneyChannelling.jpg',
  agentLimit: 3,
  tier: 2,
  tag: tag
}, {
  title: 'Money channelling',
  tasks: [
    [tap, decipher, improv_el],
    [puppet, puppet, tap],
    [decipher, decipher, improv_el],
    [improv_st]
  ],
  inCountry: '',
  rewards: {
    gameCash: 25000
  },
  losses: {
    gameContacts: 250
  },
  imgsrc: 'MoneyChannelling.jpg',
  agentLimit: 3,
  tier: 3,
  tag: tag
// }, {
//   title: 'Money channelling',
//   tasks: [
//     [tap, monitor, improv_el],
//     [puppet, puppet, tap, improv_el],
//     [decipher, decipher, improv_el],
//     [puppet, improv_st]
//   ],
//   inCountry: '',
//   rewards: {
//     gameCash: 60000
//   },
//   losses: {
//     obscurity: 0.1,
//     reputation: 100
//   },
//   imgsrc: 'Sagesse.jpg',
//   agentLimit: 3,
//   tier: 4
// }, {
//   title: 'Money channelling',
//   tasks: [
//     [tap, monitor, improv_el, improv_el],
//     [puppet, puppet, tap, improv_el],
//     [decipher, decipher, improv_el],
//     [infiltrate, puppet, improv_st]
//   ],
//   inCountry: '',
//   rewards: {
//     gameCash: 360000
//   },
//   losses: {
//     obscurity: 0.1,
//     reputation: 100
//   },
//   imgsrc: 'Sagesse.jpg',
//   agentLimit: 3,
//   tier: 5
}];

export default MoneyChannelling;
