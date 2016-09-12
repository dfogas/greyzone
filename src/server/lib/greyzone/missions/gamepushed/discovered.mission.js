/* eslint camelcase: 0 */
import {hide, improv_st, pursuit, improv_op, decipher, puppet} from '../actions';

const imgsrc = 'Discovered.jpg';
const sound = 'Discovered.ogg';
const tag = 'discovered';
const title = 'Discovered!';
const description = `Agent has been tagged by security system and now has to evade certain imprisonment.`;

const Discovered = [{
  title: title,
  tasks: [
    [hide, improv_st],
    [puppet, hide, improv_op],
    [pursuit, improv_st]
  ],
  inCountry: '',
  rewards: {
    reputation: 300
  },
  losses: {
    agentImprisoned: true
  },
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 1,
  tier: 3,
  tag: tag
}, {
  title: title,
  tasks: [
    [hide, improv_st, puppet],
    [puppet, hide, improv_op],
    [pursuit, improv_st, improv_op]
  ],
  inCountry: '',
  rewards: {
    reputation: 400
  },
  losses: {
    agentImprisoned: true
  },
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 1,
  tier: 4,
  tag: tag
}, {
  title: title,
  tasks: [
    [hide, improv_st, puppet],
    [puppet, hide, improv_op],
    [decipher],
    [pursuit, improv_st, improv_op]
  ],
  inCountry: '',
  rewards: {
    reputation: 500
  },
  losses: {
    agentImprisoned: true
  },
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 1,
  tier: 5,
  tag: tag
}];

export default Discovered;
