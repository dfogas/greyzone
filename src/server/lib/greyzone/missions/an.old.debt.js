/* eslint camelcase: 0 */
import {infiltrate, improv_op, close_combat, hit, improv_st} from './actions';

const AnOldDebt = [{
  title: 'An Old Debt',
  tasks: [
    [infiltrate, improv_op, close_combat],
    [hit, hit, close_combat],
    [improv_st, improv_st]
  ],
  inCountry: '',
  rewards: {
    agentLoyal: true,
    gameContacts: 25
  },
  losses: {
    agentKilled: true,
    reputation: 250
  },
  imgsrc: '',
  agentLimit: 1,
  tier: 3
}, {
  title: 'An Old Debt',
  tasks: [
    [infiltrate, improv_op, close_combat],
    [hit, hit, close_combat],
    [improv_st, improv_st, infiltrate]
  ],
  inCountry: '',
  rewards: {
    agentLoyal: true,
    gameContacts: 50
  },
  losses: {
    agentKilled: true,
    reputation: 500
  },
  imgsrc: '',
  agentLimit: 1,
  tier: 4
}, {
  title: 'An Old Debt',
  tasks: [
    [infiltrate, improv_op, close_combat],
    [hit, hit, close_combat],
    [improv_st, improv_st, infiltrate],
    [hit, improv_op]
  ],
  inCountry: '',
  rewards: {
    agentLoyal: true,
    gameContacts: 75
  },
  losses: {
    agentKilled: true,
    reputation: 750
  },
  imgsrc: '',
  agentLimit: 1,
  tier: 5
}];

export default AnOldDebt;
