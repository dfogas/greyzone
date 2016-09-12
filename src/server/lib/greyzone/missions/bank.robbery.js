/* eslint camelcase: 0 */
import {decipher, monitor, tap, improv_el, hit, close_combat, improv_op, improv_st, pursuit, hide} from './actions';

const tag = 'bankrobbery';
const imgsrc = 'BankRobbery.jpg';
const description = `The business seems to be slow, it's time to get money in the old-fashioned way.`;

const BankRobbery = [{
  title: 'Bank Robbery',
  tasks: [
    [monitor, decipher, improv_el],
    [hit, close_combat, improv_st],
    [pursuit, improv_op],
    [hide, hide, improv_st]
  ],
  inCountry: '',
  rewards: {
    gameCash: 1000000,
    reputation: 250
  },
  losses: {
    agentImprisoned: true,
    obscurity: 1,
    gameContacts: 1000
  },
  imgsrc: imgsrc,
  description: description,
  agentLimit: 3,
  tier: 3,
  tag: tag
}, {
  title: 'Bank Robbery',
  tasks: [
    [monitor, decipher, improv_el],
    [hit, close_combat, improv_op, improv_st],
    [pursuit, pursuit, improv_op],
    [hide, hide, improv_st]
  ],
  inCountry: '',
  rewards: {
    gameCash: 3000000,
    reputation: 2000,
    obscurity: -1
  },
  losses: {
    agentImprisoned: true,
    obscurity: 2,
    gameContacts: 500
  },
  imgsrc: imgsrc,
  description: description,
  agentLimit: 3,
  tier: 4,
  tag: tag
}, {
  title: 'Bank Robbery',
  tasks: [
    [monitor, decipher, tap, improv_el],
    [hit, close_combat, improv_op, improv_st],
    [pursuit, pursuit, improv_op],
    [hide, hide, improv_st]
  ],
  inCountry: 'BankRobbery.jpg',
  rewards: {
    gameCash: 6000000,
    reputation: 1000,
    obscurity: -2
  },
  losses: {
    agentImprisoned: true,
    obscurity: 3,
    gameContacts: 2000
  },
  imgsrc: imgsrc,
  description: description,
  agentLimit: 3,
  tier: 5,
  tag: tag
}];

export default BankRobbery;
