/* eslint camelcase: 0 */
import {hit, close_combat, puppet, improv_st, pursuit, improv_op, monitor} from '../actions';

const tag = 'demonstrationofpower';
const title = 'Demonstration Of Power';
const imgsrc = 'DemonstrationOfPower.jpg';
const sound = 'DemonstrationOfPower.ogg';
const description = `Let's show our 'friends', that we are serious.`;

const DemonstrationOfPower = [{
    title: title,
    tasks: [
      [hit, improv_op, close_combat],
      [puppet, improv_st]
    ],
    inCountry: '',
    rewards: {
      reputation: 200
    },
    losses: {
      reputation: 200
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
    imgsrc: imgsrc,
    sound: sound,
    description: description,
    agentLimit: 2,
    tier: 2,
    tag: tag
  }, {
    title: title,
    tasks: [
      [hit, hit, close_combat],
      [hit, puppet, improv_st],
      [pursuit, improv_op]
    ],
    inCountry: '',
    rewards: {
      reputation: 1000,
      obscurity: -0.1
    },
    losses: {
      reputation: 1000
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
      [hit, hit, close_combat],
      [hit, puppet, improv_st],
      [pursuit, improv_op],
      [monitor]
    ],
    inCountry: '',
    rewards: {
      reputation: 1500,
      obscurity: -0.2
    },
    losses: {
      reputation: 1500
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
      [hit, hit, close_combat, close_combat],
      [hit, puppet, improv_st],
      [pursuit, improv_op],
      [monitor]
    ],
    inCountry: '',
    rewards: {
      reputation: 2000,
      obscurity: -0.3
    },
    losses: {
      reputation: 2000
    },
    imgsrc: imgsrc,
    sound: sound,
    description: description,
    agentLimit: 2,
    tier: 5,
    tag: tag
  }];

export default DemonstrationOfPower;
