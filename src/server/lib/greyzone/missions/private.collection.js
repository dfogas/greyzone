/* eslint camelcase: 0 */
import {pursuit, improv_op, monitor, puppet, hide, improv_st, tap, improv_el, infiltrate} from './actions';

const PrivateCollection = [{
  title: 'Private Collection',
  tasks: [
    [infiltrate, infiltrate, puppet],
    [tap, improv_st, hide],
    [monitor, puppet]
  ],
  inCountry: '',
  rewards: {
    gameCash: -10000,
    artPieceGained: true
  },
  losses: {
    agentImprisoned: true,
    gameContacts: 11
  },
  imgsrc: '',
  agentLimit: 3,
  tier: 3
}, {
  title: 'Private Collection',
  tasks: [
    [infiltrate, infiltrate, puppet],
    [hide, improv_st, tap],
    [monitor, puppet],
    [improv_op, pursuit]
  ],
  inCountry: '',
  rewards: {
    gameCash: -18000,
    artPieceGained: true
  },
  losses: {
    agentImprisoned: true,
    gameContacts: 20
  },
  imgsrc: '',
  agentLimit: 3,
  tier: 4
}, {
  title: 'Private Collection',
  tasks: [
    [infiltrate, infiltrate, puppet],
    [hide, improv_st, tap, improv_el],
    [monitor, puppet],
    [improv_op, pursuit]
  ],
  inCountry: '',
  rewards: {
    gameCash: -31000,
    statusGained: true
  },
  losses: {
    agentImprisoned: true,
    gameContacts: 34
  },
  imgsrc: '',
  agentLimit: 3,
  tier: 5
}];

export default PrivateCollection;
