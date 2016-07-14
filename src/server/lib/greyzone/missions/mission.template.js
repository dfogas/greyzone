/* eslint camelcase: 0 */
import {hide, improv_st, puppet, pursuit, improv_op} from './actions';

const sound = '';
const title = '';
const tag = '';
const imgsrc = '';

const template = {
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
  agentLimit: 1,
  tier: 3,
  tag: tag
};

export default template;
