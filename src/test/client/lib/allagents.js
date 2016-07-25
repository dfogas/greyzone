import chai, {expect} from 'chai';
import chaiImmutable from 'chai-immutable';
// import immutable from 'immutable';

chai.use(chaiImmutable);

import jsonapi from './data/player.state.test';
import allAgents from '../allagents';

describe('All Agents', () => {
  it('should consider all possible items', () => {
    expect(allAgents(jsonapi)).to.have.size(8);
  });
});
