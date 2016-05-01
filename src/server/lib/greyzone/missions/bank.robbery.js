/* eslint camelcase: 0 */
import {decipher, monitor, tap, improv_el, hit, close_combat, improv_op, improv_st, pursuit, hide} from './actions';

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
  imgsrc: 'bank_robbery_tb.jpg',
  agentLimit: 3,
  tier: 3
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
  imgsrc: 'bank_robbery_tb.jpg',
  agentLimit: 3,
  tier: 4
}, {
  title: 'Bank Robbery',
  tasks: [
    [monitor, decipher, tap, improv_el],
    [hit, close_combat, improv_op, improv_st],
    [pursuit, pursuit, improv_op],
    [hide, hide, improv_st]
  ],
  inCountry: 'bank_robbery_tb.jpg',
  rewards: {
    gameCash: 7500000,
    reputation: 1000,
    obscurity: -2
  },
  losses: {
    agentImprisoned: true,
    obscurity: 3,
    gameContacts: 2000
  },
  imgsrc: '',
  agentLimit: 3,
  tier: 5
}];

export default BankRobbery;
