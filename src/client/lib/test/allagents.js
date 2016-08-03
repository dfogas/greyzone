/* Test Covered */

const chai = require('chai');
const expect = require('chai').expect;
const chaiImmutable = require('chai-immutable');
// const immutable = require('immutable');
const jsonapi = require('./data/player.state.test');
const agentOne = require('./data/agent.one.test');
const agentTwo = require('./data/agent.two.test');
const allAgents = require('../../../client/lib/bml/allagents');

chai.use(chaiImmutable);

const testState1 = jsonapi.set('agentinarmory', agentOne);
const testState2 = jsonapi.set('agentbeingsaved', agentOne);
const testState3 = jsonapi.updateIn(['activemission', 'agentsonmission'], val => val.concat([agentOne, agentTwo]));
const testState4 = jsonapi.setIn(['activemission', 'mission', 'currenttask', 'agentontask'], agentOne);

describe('All Agents', () => {// eslint-disable-line no-undef
  it('should consider all possible items', () => {// eslint-disable-line no-undef
    expect(allAgents(jsonapi)).to.have.size(6);
    expect(allAgents(testState1)).to.have.size(7);
    expect(allAgents(testState2)).to.have.size(7);
    expect(allAgents(testState3)).to.have.size(8);
    expect(allAgents(testState4)).to.have.size(7);
  });
});
