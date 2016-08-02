/* Covered */
import canCompleteTask from '../bml/cancompletetask';
import {expect} from 'chai';

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

describe('can complete task', () => {// eslint-disable-line no-undef
  it('tests some situations and resolves them correctly', () => {// eslint-disable-line no-undef
    expect(canCompleteTask(testactions, testdices1)).to.be.a('boolean');
    expect(canCompleteTask(testactions, testdices1)).to.equal(true);
    expect(canCompleteTask(testactions, testdices2)).to.equal(false);
  });
});
