/* eslint camelcase: 0 */
import {infiltrate, improv_st, improv_op, improv_el, monitor, tap, decipher} from './actions';

const DestroyEvidence = [{
  title: 'Destroy Evidence',
  tasks: [
    [infiltrate, infiltrate, improv_st],
    [improv_st, improv_el, improv_op],
    [monitor, monitor, tap]
  ],
  inCountry: '',
  rewards: {
    obscurity: 0.5,
    gameContacts: 23
  },
  losses: {
    agentImprisoned: true,
    reputation: 300,
    obscurity: 0.2
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 3
}, {
  title: 'Destroy Evidence',
  tasks: [
    [infiltrate, infiltrate, improv_st],
    [improv_st, improv_op, improv_op, improv_el],
    [monitor, monitor, tap],
    [decipher, decipher]
  ],
  inCountry: '',
  rewards: {
    obscurity: 0.75,
    gameContacts: 47
  },
  losses: {
    agentImprisoned: true,
    reputation: 500,
    obscurity: 0.25
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 4
}, {
  title: 'Destroy Evidence',
  tasks: [
    [infiltrate, infiltrate, improv_st],
    [improv_st, improv_op, improv_op, improv_el],
    [monitor, monitor, tap],
    [decipher, decipher, infiltrate, improv_st]
  ],
  inCountry: '',
  rewards: {
    obscurity: 1,
    gameContacts: 90
  },
  losses: {
    agentImprisoned: true,
    reputation: 750,
    obscurity: 0.35
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 5
}];

export default DestroyEvidence;
