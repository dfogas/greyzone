/* eslint no-unused-expressions: 1 */
/* Covered */

import {expect} from 'chai';
import agentIncurDelay from '../bml/agentincurdelay';
import agentOne from './data/agent.one.test';

describe('agent incur delay', () => {// eslint-disable-line no-undef
  it('implements game logic', () => {// eslint-disable-line no-undef
    const delay = 10 * 60 * 1000;
    const agentOneETAActive = agentOne.set('ETA', Date.now() + 60 * 1000);
    expect(agentIncurDelay(agentOne, delay, false)).to.be.a('number');
    expect(agentIncurDelay(agentOne, delay, true)).to.equal(Date.now() + delay);
    expect(agentIncurDelay(agentOneETAActive, delay, true)).to.equal(agentOneETAActive.get('ETA') + delay);
    expect(agentIncurDelay(agentOne, delay, false)).to.equal(agentOne.get('ETA'));
  });
});
