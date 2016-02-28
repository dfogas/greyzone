/* eslint camelcase: 0 */
import {puppet, infiltrate, improv_st, tap, decipher, improv_el, pursuit, hit, improv_op} from './actions';

const NextOnTheBlacklist = [{
  title: 'Next on the Blacklist',
  tasks: [
    [puppet, infiltrate, improv_st],
    [tap, decipher, improv_el],
    [pursuit, hit]
  ],
  inCountry: '',
  rewards: {
    reputation: 600,
    gameCash: 300
  },
  losses: {
    gameCash: 750,
    reputation: 300
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 3
}, {
  title: 'Next on the Blacklist',
  tasks: [
    [puppet, infiltrate, improv_st],
    [tap, decipher, improv_el],
    [pursuit, hit],
    [puppet, improv_op]
  ],
  inCountry: '',
  rewards: {
    reputation: 800,
    gameCash: 400
  },
  losses: {
    reputation: 400,
    gameCash: 1000
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 4
}, {
  title: 'Next on the Blacklist',
  tasks: [
    [puppet, infiltrate, improv_st],
    [tap, decipher, improv_el, decipher],
    [pursuit, hit],
    [puppet, improv_op]
  ],
  inCountry: '',
  rewards: {
    reputation: 1000,
    gameCash: 500
  },
  losses: {
    reputation: 500,
    gameCash: 1250
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 5
}];

export default NextOnTheBlacklist;
