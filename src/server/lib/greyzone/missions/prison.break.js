/* eslint camelcase: 0 */
import {hide, improv_st, infiltrate, decipher, tap, improv_el, close_combat, improv_op, pursuit} from './actions';

const PrisonBreak = [{
  title: 'Prison Break',
  tasks: [
    [hide, improv_st, infiltrate],
    [decipher, tap, improv_el],
    [infiltrate, hide, close_combat],
    [hide, pursuit]
  ],
  inCountry: '',
  rewards: {
    gameCash: -10000,
    agentFreed: true
  },
  losses: {
    gameCash: 10000,
    obscurity: 0.25
  },
  imgsrc: 'prison_break_tb.jpg',
  agentLimit: 3,
  tier: 3
}, {
  title: 'Prison Break',
  tasks: [
    [hide, improv_st, infiltrate, infiltrate],
    [decipher, tap, improv_el],
    [infiltrate, hide, close_combat],
    [hide, hide, pursuit]
  ],
  inCountry: '',
  rewards: {
    gameCash: -15000,
    agentFreed: true
  },
  losses: {
    gameCash: 15000,
    obscurity: 0.35
  },
  imgsrc: 'prison_break_tb.jpg',
  agentLimit: 3,
  tier: 4
}, {
  title: 'Prison Break',
  tasks: [
    [hide, improv_st, infiltrate, infiltrate],
    [decipher, tap, improv_el],
    [infiltrate, hide, close_combat, improv_op],
    [hide, pursuit, pursuit]
  ],
  inCountry: '',
  rewards: {
    gameCash: -25000,
    agentFreed: true
  },
  losses: {
    gameCash: 25000,
    obscurity: 0.45
  },
  imgsrc: 'prison_break_tb.jpg',
  agentLimit: 3,
  tier: 5
}];

export default PrisonBreak;
