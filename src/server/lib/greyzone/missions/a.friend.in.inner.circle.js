/* eslint camelcase: 0 */
import {decipher, close_combat, infiltrate, tap, improv_op, improv_st, puppet} from './actions';

const AFriendInInnerCircle = [{
  title: 'A Friend in Inner Circle',
  tasks: [
    [infiltrate, puppet, puppet],
    [tap, tap, improv_op],
    [close_combat, close_combat, infiltrate]
  ],
  inCountry: '',
  rewards: {
    gameCash: -20000,
    gameContacts: 100
  },
  losses: {
    gameCash: 5000,
    reputation: 300
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 3
}, {
  title: 'A Friend in Inner Circle',
  tasks: [
    [infiltrate, puppet, puppet],
    [tap, tap, improv_op, close_combat],
    [close_combat, close_combat, infiltrate],
    [decipher, decipher]
  ],
  inCountry: '',
  rewards: {
    gameCash: -60000,
    gameContacts: 200
  },
  losses: {
    gameCash: 10000,
    reputation: 500
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 4
}, {
  title: 'A Friend in Inner Circle',
  tasks: [
    [infiltrate, puppet, puppet, improv_st],
    [tap, tap, improv_op, close_combat],
    [close_combat, close_combat, infiltrate],
    [decipher, decipher]
  ],
  inCountry: '',
  rewards: {
    gameCash: -150000,
    gameContacts: 300
  },
  losses: {
    gameCash: 25000,
    reputation: 900
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 5
}];

export default AFriendInInnerCircle;
