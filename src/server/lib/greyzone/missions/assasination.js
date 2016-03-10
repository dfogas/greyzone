/* eslint camelcase: 0 */
import {infiltrate, improv_st, improv_op, tap, hit, hide} from './actions';

const Assasination = [{
  title: 'Assasination',
  tasks: [
    [infiltrate, improv_st],
    [hit, improv_op],
    [hide, improv_st, hide]
  ],
  inCountry: '',
  rewards: {
    reputation: 300,
    gameCash: 10000,
    gameContacts: 10
  },
  losses: {
    agentKilled: true,
    gameContacts: 8,
    obscurity: 0.3
  },
  imgsrc: '',
  agentLimit: 1,
  tier: 3
}, {
  title: 'Assasination',
  tasks: [
    [infiltrate, improv_st, improv_op],
    [hit, improv_op, hit],
    [hide, improv_st, hide]
  ],
  inCountry: '',
  rewards: {
    reputation: 600,
    gameCash: 25000,
    gameContacts: 25
  },
  losses: {
    agentKilled: true,
    gameContacts: 30,
    obscurity: 0.4
  },
  imgsrc: '',
  agentLimit: 1,
  tier: 4
}, {
  title: 'Assasination',
  tasks: [
    [infiltrate, improv_st, improv_op],
    [tap],
    [hit, hit, hit],
    [hide, improv_st, hide]
  ],
  inCountry: '',
  rewards: {
    reputation: 900,
    gameCash: 50000,
    gameContacts: 40
  },
  losses: {
    agentKilled: true,
    gameContacts: 60,
    obscurity: 0.5
  },
  imgsrc: '',
  agentLimit: 1,
  tier: 5
}];

export default Assasination;
