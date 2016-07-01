/* eslint camelcase: 0 */
import {infiltrate, improv_op, close_combat, hit, improv_st} from './actions';

const tag = 'anolddebt';
const title = 'An Old Debt';
const imgsrc = 'OldDebt.jpg';
const sound = 'OldDebt.ogg';

const AnOldDebt = [{
  title: title,
  tasks: [
    [infiltrate, improv_op, close_combat],
    [hit, hit, close_combat],
    [improv_st, improv_st]
  ],
  inCountry: '',
  rewards: {
    agentLoyal: true
  },
  losses: {
    agentKilled: true,
    reputation: 250
  },
  imgsrc: imgsrc,
  sound: sound,
  agentLimit: 2,
  tier: 3,
  tag: tag
}, {
  title: title,
  tasks: [
    [infiltrate, improv_op, close_combat],
    [hit, hit, close_combat],
    [improv_st, improv_st, infiltrate]
  ],
  inCountry: '',
  rewards: {
    agentLoyal: true
  },
  losses: {
    agentKilled: true,
    reputation: 500
  },
  imgsrc: imgsrc,
  agentLimit: 2,
  sound: sound,
  tier: 4,
  tag: tag
}, {
  title: title,
  tasks: [
    [infiltrate, improv_op, close_combat],
    [hit, hit, close_combat],
    [improv_st, improv_st, infiltrate],
    [hit, improv_op]
  ],
  inCountry: '',
  rewards: {
    agentLoyal: true
  },
  losses: {
    agentKilled: true,
    reputation: 750
  },
  imgsrc: imgsrc,
  sound: sound,
  agentLimit: 2,
  tier: 5,
  tag: tag
}];

export default AnOldDebt;
