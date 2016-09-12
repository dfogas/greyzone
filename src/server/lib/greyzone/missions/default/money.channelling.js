/* eslint camelcase: 0 */
import {tap, monitor, improv_el, puppet, decipher, improv_st, infiltrate} from '../actions';
// import randomInt from '../../../../../client/lib/getrandomint';

const tag = 'moneychannelling';
const title = 'Money channelling';
const imgsrc = 'MoneyChannelling.jpg';
const sound = 'MoneyChannelling.ogg';
const description = `This money is so clean as face of the baby. Don't ask me how I did it, but it is so.`;

const MoneyChannelling = [{
  title: title,
  tasks: [
    [tap, monitor],
    [puppet, improv_st, tap],
    [decipher, improv_el]
  ],
  inCountry: '',
  rewards: {
    gameCash: 1000
  },
  losses: {
    gameContacts: 10
  },
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 3,
  tier: 1,
  tag: tag
}, {
  title: title,
  tasks: [
    [tap, monitor, improv_el],
    [puppet, improv_st, tap],
    [decipher, improv_el]
  ],
  inCountry: '',
  rewards: {
    gameCash: 5000
  },
  losses: {
    gameContacts: 25
  },
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 3,
  tier: 2,
  tag: tag
}, {
  title: title,
  tasks: [
    [tap, decipher, improv_el],
    [puppet, puppet, tap],
    [decipher, decipher, improv_el],
    [improv_st]
  ],
  inCountry: '',
  rewards: {
    gameCash: 50000
  },
  losses: {
    gameContacts: 250
  },
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 3,
  tier: 3,
  tag: tag
}, {
  title: title,
  tasks: [
    [tap, monitor, improv_el],
    [puppet, puppet, tap, improv_el],
    [decipher, decipher, improv_el],
    [puppet, improv_st]
  ],
  inCountry: '',
  rewards: {
    gameCash: 100000
  },
  losses: {
    obscurity: 0.15,
    reputation: 500
  },
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 3,
  tag: tag,
  tier: 4
}, {
  title: title,
  tasks: [
    [tap, monitor, improv_el, improv_el],
    [puppet, puppet, tap, improv_el],
    [decipher, decipher, improv_el],
    [infiltrate, puppet, improv_st]
  ],
  inCountry: '',
  rewards: {
    gameCash: 150000
  },
  losses: {
    obscurity: 0.2,
    reputation: 500
  },
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 3,
  tag: tag,
  tier: 5
}];

export default MoneyChannelling;
