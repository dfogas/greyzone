/* eslint camelcase: 0 */
import {decipher, close_combat, infiltrate, tap, improv_op, improv_st, puppet} from './actions';

const tag = 'afriendininnercircle';

const AFriendInInnerCircle = [{
  title: 'A Friend in Inner Circle',
  tasks: [
    [infiltrate, puppet, puppet],
    [tap, tap, improv_op],
    [close_combat, close_combat, infiltrate]
  ],
  inCountry: '',
  rewards: {
    gameContacts: 1500
  },
  losses: {
    gameCash: 30000,
    reputation: 1500
  },
  imgsrc: 'inner_circle_tb.jpg',
  agentLimit: 2,
  tier: 3,
  tag: tag
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
    gameContacts: 4500,
    obscurity: 1.5
  },
  losses: {
    gameCash: 90000,
    obscurity: 0.5,
    reputation: 3000
  },
  imgsrc: 'inner_circle_tb.jpg',
  agentLimit: 2,
  tier: 4,
  tag: tag
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
    gameContacts: 6000,
    obscurity: 1.5,
    agentFreed: true
  },
  losses: {
    gameCash: 300000,
    reputation: 3000,
    obscurity: 1.5
  },
  imgsrc: 'inner_circle_tb.jpg',
  agentLimit: 2,
  tier: 5,
  tag: tag
}];

export default AFriendInInnerCircle;
