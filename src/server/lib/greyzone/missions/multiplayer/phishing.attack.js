/* eslint camelcase: 0 */
/* this mission is intended as a way to find another player */

import {puppet, tap, decipher, improv_st, monitor, improv_el} from '../actions';

const imgsrc = 'PhishingAttack.jpg';
const sound = 'PhishingAttack.ogg';
const tag = 'phishingattack';
const title = 'Phishing Attack';

const PhishingAttack = {
  title: title,
  tasks: [
    [puppet, decipher, tap],
    [monitor, monitor, improv_st, improv_el],
    [puppet, improv_st]
  ],
  inCountry: '',
  rewards: {
    playerDiscovered: true,
    cash: -100000
  },
  losses: {
    contacts: 1000
  },
  imgsrc: imgsrc,
  sound: sound,
  agentLimit: 2,
  tier: 3,
  tag: tag
};

export default PhishingAttack;
