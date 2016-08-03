import {expect} from 'chai';
import TrainingTable from '../../../server/lib/greyzone/globals/trainingtable';
import AgentOne from './data/agent.one.test';
import AgentTwo from './data/agent.two.test';
import shouldHaveRank from '../bml/shouldhaverank';
import immutable from 'immutable';

describe('should have rank', () => {// eslint-disable-line no-undef
  it('implements correctly game logic', () => {// eslint-disable-line no-undef
    expect(shouldHaveRank(AgentOne, immutable.fromJS(TrainingTable))).to.equal(4);
    expect(shouldHaveRank(AgentTwo, immutable.fromJS(TrainingTable))).to.equal(3);
  });
});
