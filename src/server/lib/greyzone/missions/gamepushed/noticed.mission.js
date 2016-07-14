/* eslint camelcase: 0 */

import {hide, improv_st, improv_op, puppet} from '../actions';

const sound = 'Noticed.ogg';
const imgsrc = 'Noticed.jpg';
const title = 'Noticed!';
const tag = 'noticed';

const Noticed = [{
  title: title,
  tasks: [
    [hide, improv_st],
    [hide, improv_op]
  ],
  inCountry: '',
  rewards: {
    reputation: 100
  },
  losses: {
    obscurity: 0.2
  },
  imgsrc: imgsrc,
  sound: sound,
  agentLimit: 1,
  tier: 1,
  tag: tag
}, {
  title: title,
  tasks: [
    [hide, improv_st],
    [puppet, hide, improv_op]
  ],
  inCountry: '',
  rewards: {
    reputation: 200
  },
  losses: {
    obscurity: 0.4
  },
  sound: sound,
  imgsrc: imgsrc,
  agentLimit: 1,
  tier: 2,
  tag: tag
}];

export default Noticed;
