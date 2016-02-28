/* eslint camelcase: 0 */
import {decipher, tap, improv_st, hit, improv_op, close_combat, hide, monitor} from './actions';

const ProtectWitness = [{
  title: 'Protect Witness',
  tasks: [
    [decipher, decipher],
    [close_combat, improv_op, hide],
    [hit, hit, improv_op]
  ],
  inCountry: '',
  rewards: {
    reputation: 700,
    gameCash: 20000
  },
  losses: {
    agentKilled: true,
    reputation: 400,
    gameContacts: 10
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 3
}, {
  title: 'Protect Witness',
  tasks: [
    [monitor, monitor, monitor],
    [close_combat, improv_op, hide, improv_st],
    [hit, hit, improv_op],
    [decipher, tap]
  ],
  inCountry: '',
  rewards: {
    reputation: 1200,
    gameCash: 60000
  },
  losses: {
    agentKilled: true,
    reputation: 700,
    gameContacts: 23
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 4
}, {
  title: 'Protect Witness',
  tasks: [
    [monitor, monitor, monitor, tap],
    [close_combat, improv_op, hide, improv_st],
    [hit, hit, improv_op],
    [decipher, tap, improv_st]
  ],
  inCountry: '',
  rewards: {
    reputation: 1700,
    gameCash: 120000
  },
  losses: {
    agentKilled: true,
    reputation: 1000,
    gameContacts: 38
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 5
}];

export default ProtectWitness;
