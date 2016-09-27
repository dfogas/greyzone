/* eslint camelcase: 0 */
import {tap, monitor, improv_el, improv_op, improv_st, pursuit, close_combat, hide} from '../actions';

const tag = 'agentintrouble';
const title = 'Agent In Trouble';
const imgsrc = 'AgentInTrouble.jpg';
const sound = 'AgentInTrouble.ogg';
const description = `How did she got to this mess is a puzzle ..., but lets help her and see what happens.`;

let AgentInTrouble = [{
  title: title,
  tasks: [
    [tap, monitor, improv_el],
    [improv_op, improv_st]
  ],
  // inCountry: '',
  rewards: {
    gameCash: -2000,
    agentRecruited: true
  },
  losses: {
    gameCash: 1000,
    gameContacts: 25
  },
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 2,
  tier: 1,
  tag: tag
}, {
  title: title,
  tasks: [
    [tap, monitor, improv_el],
    [improv_op, improv_st],
    [pursuit]
  ],
  inCountry: '',
  rewards: {
    gameCash: -4000,
    agentRecruited: true
  },
  losses: {
    gameContacts: 50,
    gameCash: 2000
  },
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 2,
  tier: 2,
  tag: tag
}, {
  title: title,
  tasks: [
    [tap, monitor, improv_el],
    [improv_op, improv_st, close_combat],
    [pursuit, pursuit]
  ],
  inCountry: '',
  rewards: {
    gameCash: -6000,
    agentRecruited: true
  },
  losses: {
    gameCash: 3000,
    gameContacts: 75
  },
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 2,
  tier: 3,
  tag: tag
}, {
  title: title,
  tasks: [
    [tap, monitor, improv_el],
    [improv_op, improv_st, close_combat],
    [pursuit, pursuit],
    [improv_el, pursuit]
  ],
  inCountry: '',
  rewards: {
    gameCash: -50000,
    agentRecruited: true
  },
  losses: {
    gameContacts: 175,
    gameCash: 25000
  },
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 2,
  tier: 4,
  tag: tag
}, {
  title: title,
  tasks: [
    [tap, monitor, improv_el],
    [improv_op, improv_st, close_combat, hide],
    [pursuit, pursuit, improv_op],
    [improv_el, pursuit]
  ],
  inCountry: '',
  rewards: {
    gameCash: -100000,
    agentRecruited: true
  },
  losses: {
    gameContacts: 375,
    gameCash: 50000
  },
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 2,
  tier: 5,
  tag: tag
}];

export default AgentInTrouble;
