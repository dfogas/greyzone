/* eslint camelcase: 0 */
import {hide, improv_st, infiltrate, decipher, tap, improv_el, close_combat, improv_op, pursuit} from './actions';

const tag = 'prisonbreak';
const imgsrc = 'PrisonBreak.jpg';
const sound = 'PrisonBreak.ogg';
const description = `This is the plan, if it fails, we resort to plan B. What is plan B? There is no plan B.`;

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
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 3,
  tier: 3,
  tag: tag
}, {
  title: 'Prison Break',
  tasks: [
    [hide, improv_st, infiltrate, infiltrate],
    [decipher, tap, improv_el],
    [infiltrate, hide, close_combat],
    [hide, hide]
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
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 3,
  tier: 4,
  tag: tag
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
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 3,
  tier: 5,
  tag: tag
}];

export default PrisonBreak;
