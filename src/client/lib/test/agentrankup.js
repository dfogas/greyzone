/* eslint no-unused-expressions: 1 */
/*Covered */
import {expect} from 'chai';
import agentRankup from '../bml/agentrankup';
import agentOne from './data/agent.one.test';
import agentTwo from './data/agent.two.test';
import TrainingTable from '../../../server/lib/greyzone/globals/trainingtable';
import immutable from 'immutable';

describe('agent rankup', () => {// eslint-disable-line no-undef
  it('implements game logic correctly', () => {// eslint-disable-line no-undef
    expect(agentRankup(immutable.fromJS(TrainingTable), 7, agentOne)).to.be.an('object');
    expect(agentRankup(immutable.fromJS(TrainingTable), 7, agentOne)).to.have.property('skill');
    expect(agentRankup(immutable.fromJS(TrainingTable), 7, agentTwo)).to.have.property('equipment');
    expect(agentRankup(immutable.fromJS(TrainingTable), 7, agentOne)).to.have.property('agent');
    expect(agentRankup(immutable.fromJS(TrainingTable), 7, agentOne).agent).to.be.an.instanceOf(immutable.Map);
  });
});
