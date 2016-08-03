/* Covered */
import getPrimarySkill from '../bml/getprimaryskill';
import immutable from 'immutable';
import chai from 'chai';
const expect = chai.expect;

const {agent1, agent2, agent3} = {
  agent1: immutable.fromJS({specialist: 'spy'}),
  agent2: immutable.fromJS({specialist: 'technician'}),
  agent3: immutable.fromJS({specialist: 'operative'})
};

describe('get primary skill', () => {// eslint-disable-line no-undef
  it('generates appropriate string based on agent\'s profession', () => {// eslint-disable-line no-undef
    expect(getPrimarySkill(agent1)).to.equal('stealthSkill');
    expect(getPrimarySkill(agent2)).to.equal('electronicsSkill');
    expect(getPrimarySkill(agent3)).to.equal('operationsSkill');
  });
});
