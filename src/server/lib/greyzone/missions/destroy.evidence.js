/* eslint camelcase: 0 */
import {infiltrate, improv_st, improv_op, improv_el, monitor, tap, decipher} from './actions';

const tag = 'destroyevidence';
const title = 'Destroy Evidence';
const imgsrc = 'DestroyEvidence.jpg';
const sound = 'DestroyEvidence.ogg';
const description = `This was an excellent opportunity suppress some inconvenient facts, and dangerous ones too.`;

const DestroyEvidence = [{
  title: title,
  tasks: [
    [infiltrate, infiltrate, improv_st],
    [improv_st, improv_el, improv_op],
    [monitor, monitor, tap]
  ],
  inCountry: '',
  rewards: {
    obscurity: 1
  },
  losses: {
    agentImprisoned: true,
    reputation: 500
  },
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 2,
  tier: 3,
  tag: tag
}, {
  title: title,
  tasks: [
    [infiltrate, infiltrate, improv_st],
    [improv_st, improv_op, improv_op, improv_el],
    [monitor, monitor, tap],
    [decipher, decipher]
  ],
  inCountry: '',
  rewards: {
    obscurity: 1.75,
    gameContacts: 1000
  },
  losses: {
    agentImprisoned: true,
    reputation: 1500,
    obscurity: 0.25
  },
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 2,
  tier: 4,
  tag: tag
}, {
  title: title,
  tasks: [
    [infiltrate, infiltrate, improv_st],
    [improv_st, improv_op, improv_op, improv_el],
    [monitor, monitor, tap],
    [decipher, decipher, infiltrate, improv_st]
  ],
  inCountry: '',
  rewards: {
    obscurity: 2.5,
    gameContacts:2500
  },
  losses: {
    agentImprisoned: true,
    reputation: 3750,
    obscurity: 0.35
  },
  imgsrc: imgsrc,
  sound: sound,
  description: description,
  agentLimit: 2,
  tier: 5,
  tag: tag
}];

export default DestroyEvidence;
