/* eslint camelcase: 0 */
import {tap, monitor, improv_el, improv_op, improv_st, pursuit, close_combat, hide} from '../actions';

function character() {
  let chance = Math.round();

  if (chance < 0.333)
    return 'operative';
  else if (chance < 0.667)
    return 'technician';
  else
    return 'spy';
}

const AgentInTrouble = [{
  title: 'Agent In Trouble',
  tasks: [
    [tap, monitor, improv_el],
    [improv_op, improv_st]
  ],
  inCountry: '',
  rewards: {
    agentRecruited: true,
    gameCash: -2000,
    character: character()
  },
  losses: {
    gameCash: 1000,
    gameContacts: 25
  },
  imgsrc: 'chinese.jpg',
  agentLimit: 2,
  tier: 1
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
    gameCash: -4000,
    character: character()
  },
  losses: {
    gameContacts: 50,
    gameCash: 2000
  },
  imgsrc: 'chinese.jpg',
  agentLimit: 2,
  tier: 2
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
    gameCash: -6000,
    character: character()
  },
  losses: {
    gameContacts: 75,
    gameCash: 3000
  },
  imgsrc: 'chinese.jpg',
  agentLimit: 2,
  tier: 3
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
    gameCash: -50000,
    character: character()
  },
  losses: {
    gameContacts: 175,
    gameCash: 25000
  },
  imgsrc: 'chinese.jpg',
  agentLimit: 2,
  tier: 4
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
    gameCash: -100000,
    character: character()
  },
  losses: {
    gameContacts: 375,
    gameCash: 50000
  },
  imgsrc: 'chinese.jpg',
  agentLimit: 2,
  tier: 5
}];

export default AgentInTrouble;
