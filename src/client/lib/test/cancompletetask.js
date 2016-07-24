import canCompleteTask from '../cancompletetask';
import chai, {expect} from 'chai';

var testactions = [
  {name: 'tap', type: 'electronics', imgsrc: 'john'},
  {name: 'improv', type: 'electronics', imgsrc: 'ladida'},
  {name: 'improv', type: 'operations', imgsrc: 'blueeffect'}
];
var testdices1 = [
  {name: 'tap', type: 'electronics'},
  {name: 'improv', type: 'electronics'},
  {name: 'improv', type: 'operations'},
  {name: 'pursuit', type: 'operations'},
  {name: 'fail', type: 'operations'}
];
var testdices2 = [
  {name: 'tap', type: 'electronics'},
  {name: 'improv', type: 'electronics'},
  {name: 'improv', type: 'electronics'},
  {name: 'pursuit', type: 'operations'},
  {name: 'fail', type: 'operations'}
];

describe('can complete task', () => {
  it('tests some situations and resolves them correctly', () => {
    expect(canCompleteTask(testactions, testdices1)).to.be.a('boolean');
    expect(canCompleteTask(testactions, testdices1)).to.equal(true);
    expect(canCompleteTask(testactions, testdices2)).to.equal(false);
  });
});
