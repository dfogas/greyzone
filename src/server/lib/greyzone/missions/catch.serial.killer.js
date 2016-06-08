/* eslint camelcase: 0 */
import {tap, decipher, close_combat, improv_op, improv_st, puppet, pursuit, infiltrate} from './actions';

const tag = 'catchserialkiller';

const CatchSerialKiller = [{
  title: 'Catch Serial Killer',
  tasks: [
    [tap, tap, decipher],
    [close_combat, improv_op],
    [improv_op, pursuit, puppet],
    [infiltrate, infiltrate, improv_st]
  ],
  inCountry: '',
  rewards: {
    gameContacts: 21,
    obscurity: 0.3
  },
  losses: {
    gameContacts: 9,
    obscurity: 0.3,
    gameCash: 150
  },
  imgsrc: '',
  agentLimit: 3,
  tier: 3,
  tag: tag
}, {
  title: 'Catch Serial Killer',
  tasks: [
    [tap, tap, decipher, decipher],
    [close_combat, improv_op],
    [improv_op, pursuit, puppet],
    [infiltrate, infiltrate, improv_st]
  ],
  inCountry: '',
  rewards: {
    gameContacts: 28,
    obscurity: 0.4
  },
  losses: {
    gameContacts: 12,
    gameCash: 200,
    obscurity: 0.4
  },
  imgsrc: '',
  agentLimit: 3,
  tier: 4,
  tag: tag
}, {
  title: 'Catch Serial Killer',
  tasks: [
    [tap, tap, decipher, decipher],
    [close_combat, improv_op, close_combat],
    [improv_op, pursuit, puppet, puppet],
    [infiltrate, infiltrate, improv_st]
  ],
  inCountry: '',
  rewards: {
    gameContacts: 35,
    obscurity: 0.5
  },
  losses: {
    gameContacts: 15,
    gameCash: 250,
    obscurity: 0.5
  },
  imgsrc: '',
  agentLimit: 3,
  tier: 5,
  tag: tag
}];

export default CatchSerialKiller;
