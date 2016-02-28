/*eslint camelcase: 0*/
import {close_combat, hide, improv_op, improv_st, improv_el, monitor, hit, infiltrate, puppet} from '../actions';

const SetupOperation = [{
  title: 'Set-up operation',
  tasks: [
    [close_combat, hide],
    [hit, improv_op],
    [infiltrate, improv_st, hide]
  ],
  inCountry: '',
  rewards: {
    gameCash: 600,
    reputation: 100
  },
  losses: {
    agentImprisoned: true,
    reputation: 100,
    gameCash: 200
  },
  imgsrc: 'godfather_free_youtube.jpg',
  agentLimit: 3,
  tier: 1
}, {
  title: 'Set-up operation',
  tasks: [
    [close_combat, hide, improv_op],
    [hit, improv_op, hit],
    [infiltrate, improv_st, hide]
  ],
  inCountry: '',
  rewards: {
    gameCash: 1200,
    reputation: 200
  },
  losses: {
    agentImprisoned: true,
    reputation: 200,
    gameCash: 400
  },
  imgsrc: 'godfather_free_youtube.jpg',
  agentLimit: 3,
  tier: 2
}, {
  title: 'Set-up operation',
  tasks: [
    [close_combat, hide, improv_op],
    [improv_el, monitor],
    [hit, improv_op, hit],
    [infiltrate, improv_st, hide]
  ],
  inCountry: '',
  rewards: {
    gameCash: 1800,
    reputation: 300
  },
  losses: {
    agentImprisoned: true,
    reputation: 300,
    gameCash: 200
  },
  imgsrc: 'godfather_free_youtube.jpg',
  agentLimit: 3,
  tier: 3
}, {
  title: 'Set-up operation',
  tasks: [
    [close_combat, hide, improv_op],
    [improv_el, monitor],
    [hit, improv_op, hit],
    [infiltrate, improv_st, hide, puppet]
  ],
  inCountry: '',
  rewards: {
    gameCash: 2400,
    reputation: 400
  },
  losses: {
    agentImprisoned: true,
    reputation: 400,
    gameCash: 200
  },
  imgsrc: 'godfather_free_youtube.jpg',
  agentLimit: 3,
  tier: 4
}, {
  title: 'Set-up operation',
  tasks: [
    [close_combat, hide, improv_op, improv_st],
    [improv_el, monitor, monitor],
    [hit, improv_op, hit],
    [infiltrate, improv_st, hide, puppet]
  ],
  inCountry: '',
  rewards: {
    gameCash: 3000,
    reputation: 500
  },
  losses: {
    agentImprisoned: true,
    reputation: 500,
    gameCash: 200
  },
  imgsrc: 'godfather_free_youtube.jpg',
  agentLimit: 3,
  tier: 5
}];

export default SetupOperation;
