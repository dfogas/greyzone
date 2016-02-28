/* eslint camelcase: 0 */
import {decipher, improv_el, puppet, improv_st, tap, monitor, infiltrate} from './actions';

const IndustrialEspionage = [{
  title: 'Industrial Espionage',
  tasks: [
    [infiltrate, infiltrate, improv_st],
    [tap, decipher, decipher],
    [puppet, improv_st]
  ],
  inCountry: '',
  rewards: {
    gameCash: 50000,
    gameContacts: -10
  },
  losses: {
    reputation: 200,
    gameContacts: 10
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 3
}, {
  title: 'Industrial Espionage',
  tasks: [
    [infiltrate, infiltrate, improv_st],
    [tap, decipher, monitor],
    [puppet, puppet, improv_st],
    [decipher, improv_el]
  ],
  inCountry: '',
  rewards: {
    gameCash: 150000,
    gameContacts: -25
  },
  losses: {
    reputation: 400,
    gameContacts: 25
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 4
}, {
  title: 'Industrial Espionage',
  tasks: [
    [infiltrate, infiltrate, improv_st],
    [tap, decipher, tap, monitor],
    [puppet, puppet, improv_st],
    [decipher, decipher, improv_el]
  ],
  inCountry: '',
  rewards: {
    gameCash: 350000,
    gameContacts: -45
  },
  losses: {
    reputation: 650,
    gameContacts: 45
  },
  imgsrc: '',
  agentLimit: 2,
  tier: 5
}];

export default IndustrialEspionage;
