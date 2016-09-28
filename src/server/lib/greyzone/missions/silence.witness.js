/* eslint camelcase: 0 */
import {decipher, tap, improv_st, hit, improv_op, close_combat, hide, monitor} from './actions';

const tag = 'silencewitness';

const SilenceWitness = [{
  title: 'Silence Witness',
  tasks: [
    [decipher, decipher],
    [close_combat, improv_op, hide],
    [hit, hit, improv_op]
  ],
  inCountry: '',
  rewards: {
    witnessSilenced: true,
    gameCash: -60000
  },
  losses: {
    reputation: 400,
    gameContacts: 500
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 3,
  tag: tag
}, {
  title: 'Silence Witness',
  tasks: [
    [monitor, monitor, monitor],
    [close_combat, improv_op, hide, improv_st],
    [hit, hit, improv_op],
    [decipher, tap]
  ],
  inCountry: '',
  rewards: {
    witnessSilenced: true,
    gameCash: -120000
  },
  losses: {
    reputation: 700,
    gameContacts: 1000
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 4,
  tag: tag
}, {
  title: 'Silence Witness',
  tasks: [
    [monitor, monitor, monitor, tap],
    [close_combat, improv_op, hide, improv_st],
    [hit, hit, improv_op],
    [decipher, tap, improv_st]
  ],
  inCountry: '',
  rewards: {
    witnessSilenced: true,
    gameCash: -180000
  },
  losses: {
    reputation: 1000,
    gameContacts: 2000
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 5,
  tag: tag
}];

export default SilenceWitness;
