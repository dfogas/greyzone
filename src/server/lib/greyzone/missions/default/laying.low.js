/*eslint camelcase: 0*/
import {close_combat, hide, improv_op, improv_st, improv_el, monitor, hit, infiltrate, puppet} from '../actions';

const tag = 'layinglow';
const title = 'Laying Low';
const imgsrc = 'LayingLow.jpg';
const sound = 'LayingLow.ogg';

const LayingLow = [{
  title: title,
  tasks: [
    [close_combat, hide],
    [hit, improv_op],
    [infiltrate, improv_st, hide]
  ],
  inCountry: '',
  rewards: {
    obscurity: 0.05
  },
  losses: {
    reputation: 50
  },
  imgsrc: imgsrc,
  sound: sound,
  agentLimit: 3,
  tier: 1,
  tag: tag
}, {
  title: title,
  tasks: [
    [close_combat, hide, improv_op],
    [hit, improv_op, hit],
    [infiltrate, improv_st, hide]
  ],
  inCountry: '',
  rewards: {
    obscurity: 0.25
  },
  losses: {
    reputation: 250
  },
  imgsrc: imgsrc,
  agentLimit: 3,
  sound: sound,
  tier: 2,
  tag: tag
}, {
  title: title,
  tasks: [
    [close_combat, hide, improv_op],
    [improv_el, monitor],
    [hit, improv_op, hit],
    [infiltrate, improv_st, hide]
  ],
  inCountry: '',
  rewards: {
    obscurity: 0.75
  },
  losses: {
    reputation: 1000
  },
  imgsrc: imgsrc,
  sound: sound,
  agentLimit: 3,
  tier: 3,
  tag: tag
}, {
  title: title,
  tasks: [
    [close_combat, hide, improv_op],
    [improv_el, monitor],
    [hit, improv_op, hit],
    [infiltrate, improv_st, hide, puppet]
  ],
  inCountry: '',
  rewards: {
    obscurity: 1,
    reputation: 500,
    gameCash: 50000
  },
  losses: {
    agentImprisoned: true,
    reputation: 500
  },
  sound: sound,
  imgsrc: imgsrc,
  agentLimit: 3,
  tag: tag,
  tier: 4
}, {
  title: title,
  tasks: [
    [close_combat, hide, improv_op, improv_st],
    [improv_el, monitor, monitor],
    [hit, improv_op, hit],
    [infiltrate, improv_st, hide, puppet]
  ],
  inCountry: '',
  rewards: {
    obscurity: 1.25,
    reputation: 1000,
    gameCash: 100000
  },
  losses: {
    agentImprisoned: true,
    reputation: 1000
  },
  sound: sound,
  imgsrc: imgsrc,
  agentLimit: 3,
  tag: tag,
  tier: 5
}];

export default LayingLow;
