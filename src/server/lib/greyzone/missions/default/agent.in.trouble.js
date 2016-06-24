/* eslint camelcase: 0 */
import {tap, monitor, improv_el, improv_op, improv_st, pursuit, close_combat, hide} from '../actions';

const tag = 'agentintrouble';

let AgentInTrouble = [{
  title: 'Agent In Trouble',
  tasks: [
    [tap, monitor, improv_el],
    [improv_op, improv_st]
  ],
  inCountry: '',
  rewards: {
    agentRecruited: true,
    gameCash: -2000
  },
  losses: {
    gameCash: 1000,
    gameContacts: 25
  },
  imgsrc: 'AgentInTrouble.jpg',
  agentLimit: 2,
  tier: 1,
  tag: tag
}, {
  title: 'Agent In Trouble',
  tasks: [
    [tap, monitor, improv_el],
    [improv_op, improv_st],
    [pursuit]
  ],
  inCountry: '',
  rewards: {
    agentRecruited: true,
    gameCash: -4000
  },
  losses: {
    gameContacts: 50,
    gameCash: 2000
  },
  imgsrc: 'AgentInTrouble.jpg',
  agentLimit: 2,
  tier: 2,
  tag: tag
}, {
  title: 'Agent In Trouble',
  tasks: [
    [tap, monitor, improv_el],
    [improv_op, improv_st, close_combat],
    [pursuit, pursuit]
  ],
  inCountry: '',
  rewards: {
    agentRecruited: true,
    gameCash: -6000
  },
  losses: {
    gameContacts: 75,
    gameCash: 3000
  },
  imgsrc: 'AgentInTrouble.jpg',
  agentLimit: 2,
  tier: 3,
  tag: tag
}, {
  title: 'Agent In Trouble',
  tasks: [
    [tap, monitor, improv_el],
    [improv_op, improv_st, close_combat],
    [pursuit, pursuit],
    [improv_el, pursuit]
  ],
  inCountry: '',
  rewards: {
    agentRecruited: true,
    gameCash: -50000
  },
  losses: {
    gameContacts: 175,
    gameCash: 25000
  },
  imgsrc: 'AgentInTrouble.jpg',
  agentLimit: 2,
  tier: 4,
  tag: tag
}, {
  title: 'Agent In Trouble',
  tasks: [
    [tap, monitor, improv_el],
    [improv_op, improv_st, close_combat, hide],
    [pursuit, pursuit, improv_op],
    [improv_el, pursuit]
  ],
  inCountry: '',
  rewards: {
    agentRecruited: true,
    gameCash: -100000
  },
  losses: {
    gameContacts: 375,
    gameCash: 50000
  },
  imgsrc: 'AgentInTrouble.jpg',
  agentLimit: 2,
  tier: 5,
  tag: tag
}];

export default AgentInTrouble;
