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
    gameCash: 100000,
    reputation: 100
  },
  losses: {
    agentImprisoned: true,
    obscurity: 0.3,
    gameContacts: 10
  },
  imgsrc: '',
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
    gameCash: 200000,
    reputation: 200
  },
  losses: {
    agentImprisoned: true,
    obscurity: 0.35,
    gameContacts: 15
  },
  imgsrc: '',
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
  inCountry: '',
  rewards: {
    gameCash: 300000,
    reputation: 300
  },
  losses: {
    agentImprisoned: true,
    obscurity: 0.4,
    gameContacts: 23
  },
  imgsrc: '',
  agentLimit: 3,
  tier: 5
}];

export default BankRobbery;
