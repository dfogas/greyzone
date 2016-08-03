/* Covered */
import chai, {expect} from 'chai';
import actionDices from '../bml/actiondices';
import immutable from 'immutable';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);

const testtask1 = immutable.fromJS([
  {name: 'tap', type: 'electronics', imgsrc: 'john'}
]);
const testtask2 = immutable.fromJS([
  {name: 'improv', type: 'electronics', imgsrc: 'ladida'},
  {name: 'improv', type: 'operations', imgsrc: 'blueeffect'}
]);
const testtask3 = immutable.fromJS([
  {name: 'tap', type: 'electronics', imgsrc: 'john'},
  {name: 'hide', type: 'stealth', imgsrc: 'ladida'},
  {name: 'improv', type: 'operations', imgsrc: 'blueeffect'}
]);
const testtask4 = immutable.fromJS([
  {name: 'hide', type: 'stealth', imgsrc: 'ladida'},
  {name: 'improv', type: 'operations', imgsrc: 'blueeffect'}
]);
const testtask5 = immutable.fromJS([
  {name: 'hide', type: 'stealth', imgsrc: 'ladida'},
  {name: 'improv', type: 'electronics', imgsrc: 'blueeffect'}
]);
const testtask6 = immutable.fromJS([
  {name: 'improv', type: 'operations', imgsrc: 'blueeffect'}
]);
const testtask7 = immutable.fromJS([
  {name: 'improv', type: 'stealth', imgsrc: 'blueeffect'}
]);
const agent = immutable.fromJS({
  operationsSkill: 3,
  electronicsSkill: 4,
  stealthSkill: 5
});

describe('action dices', () => { // eslint-disable-line no-undef
  it('gives the right count of dices', () => { // eslint-disable-line no-undef
    expect(actionDices(agent, testtask1)).to.have.size(4);
    expect(actionDices(agent, testtask2)).to.have.size(7);
    expect(actionDices(agent, testtask3)).to.have.size(12);
    expect(actionDices(agent, testtask4)).to.have.size(8);
    expect(actionDices(agent, testtask5)).to.have.size(9);
    expect(actionDices(agent, testtask6)).to.have.size(3);
    expect(actionDices(agent, testtask7)).to.have.size(5);
  });
});
