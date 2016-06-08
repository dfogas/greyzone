/* eslint camelcase: 0 */
import {hide, improv_st, infiltrate, puppet, monitor, tap, pursuit, improv_op, close_combat, hit} from './actions';

const tag = 'secretinvestigation';

const SecretInvestigation = [{
  title: 'Secret Investigation',
  tasks: [
    [hide, improv_st, infiltrate],
    [puppet, monitor, hide],
    [pursuit, improv_op],
    [hit]
  ],
  inCountry: '',
  rewards: {
    reputation: 200,
    gameCash: 30000,
    gameContacts: 12
  },
  losses: {
    reputation: 200,
    gameCash: 10000,
    gameContacts: 10
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 3,
  tag: tag
}, {
  title: 'Secret Investigation',
  tasks: [
    [hide, improv_st, infiltrate],
    [puppet, hide, monitor, tap],
    [pursuit, improv_op, close_combat],
    [hit]
  ],
  inCountry: '',
  rewards: {
    reputation: 400,
    gameCash: 60000,
    gameContacts: 28
  },
  losses: {
    reputation: 400,
    gameCash: 20000,
    gameContacts: 21
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 4,
  tag: tag
}, {
  title: 'Secret Investigation',
  tasks: [
    [hide, improv_st, infiltrate],
    [puppet, hide, monitor, tap],
    [pursuit, improv_op, close_combat],
    [hit, improv_op, close_combat]
  ],
  inCountry: '',
  rewards: {
    reputation: 750,
    gameCash: 90000,
    gameContacts: 61
  },
  losses: {
    reputation: 600,
    gameCash: 35000,
    gameContacts: 38
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 5,
  tag: tag
}];

export default SecretInvestigation;
