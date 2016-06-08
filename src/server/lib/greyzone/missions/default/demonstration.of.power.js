/* eslint camelcase: 0 */
import {hit, close_combat, puppet, improv_st, pursuit, improv_op} from '../actions';

const tag = 'demonstrationofpower';

const DemonstrationOfPower = [{
    title: 'Demonstration of power',
    tasks: [
      [hit, hit, close_combat],
      [puppet, improv_st]
    ],
    inCountry: '',
    rewards: {
      reputation: 200
    },
    losses: {
      reputation: 200
    },
    imgsrc: 'Heat-Movie.jpg',
    agentLimit: 2,
    tier: 1,
    tag: tag
  }, {
    title: 'Demonstration of power',
    tasks: [
      [hit, hit, close_combat],
      [puppet, improv_st],
      [pursuit, improv_op]
    ],
    inCountry: '',
    rewards: {
      reputation: 400
    },
    losses: {
      reputation: 400
    },
    imgsrc: 'Heat-Movie.jpg',
    agentLimit: 2,
    tier: 2,
    tag: tag
  }, {
    title: 'Demonstration of power',
    tasks: [
      [hit, hit, close_combat],
      [hit, puppet, improv_st],
      [pursuit, improv_op]
    ],
    inCountry: '',
    rewards: {
      reputation: 1000
    },
    losses: {
      reputation: 1000
    },
    imgsrc: 'Heat-Movie.jpg',
    agentLimit: 2,
    tier: 3,
    tag: tag
  // }, {
  //   title: 'Demonstration of power',
  //   tasks: [
  //     [hit, hit, close_combat],
  //     [hit, puppet, improv_st],
  //     [pursuit, improv_op],
  //     [monitor]
  //   ],
  //   inCountry: '',
  //   rewards: {
  //     reputation: 800
  //   },
  //   losses: {
  //     reputation: 400
  //   },
  //   imgsrc: 'Heat-Movie.jpg',
  //   agentLimit: 2,
  //   tier: 4
  // }, {
  //   title: 'Demonstration of power',
  //   tasks: [
  //     [hit, hit, close_combat, close_combat],
  //     [hit, puppet, improv_st],
  //     [pursuit, improv_op],
  //     [monitor]
  //   ],
  //   inCountry: '',
  //   rewards: {
  //     reputation: 1000
  //   },
  //   losses: {
  //     reputation: 500
  //   },
  //   imgsrc: 'Heat-Movie.jpg',
  //   agentLimit: 2,
  //   tier: 5
  }];

export default DemonstrationOfPower;
