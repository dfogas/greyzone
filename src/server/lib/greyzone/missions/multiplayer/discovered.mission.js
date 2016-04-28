/* eslint camelcase: 0 */
import {hide, improv_st, pursuit, improv_op, decipher, puppet} from '../actions';

const Discovered = [{
  title: 'Discovered!',
  tasks: [
    [hide, improv_st],
    [puppet, hide, improv_op],
    [pursuit, improv_st]
  ],
  inCountry: '',
  rewards: {
    reputation: 300
  },
  losses: {
    agentImprisoned: true
  },
  imgsrc: '',
  agentLimit: 1,
  tier: 3
}, {
  title: 'Discovered!',
  tasks: [
    [hide, improv_st, puppet],
    [puppet, hide, improv_op],
    [pursuit, improv_st, improv_op]
  ],
  inCountry: '',
  rewards: {
    reputation: 400
  },
  losses: {
    agentImprisoned: true
  },
  imgsrc: '',
  agentLimit: 1,
  tier: 4
}, {
  title: 'Discovered!',
  tasks: [
    [hide, improv_st, puppet],
    [puppet, hide, improv_op],
    [decipher],
    [pursuit, improv_st, improv_op]
  ],
  inCountry: '',
  rewards: {
    reputation: 500
  },
  losses: {
    agentImprisoned: true
  },
  imgsrc: '',
  agentLimit: 1,
  tier: 5
}];

export default Discovered;
