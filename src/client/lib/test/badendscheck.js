import {expect} from 'chai';
import badEndsCheck from '../bml/badendscheck';

import playerState from './data/player.state.test';

const agents = playerState.get('agents');
const self = playerState.get('self');
// const LeftInPrisonNotPaying = playerState.setIn(['agents', agents.indexOf(self), 'prison'], true).set('paying', null);
const LeftInPrisonPayingNoLoyal = playerState.setIn(['agents', agents.indexOf(self), 'prison'], true).update('agents', val => val.filter(ag => ag.get('loyalty') !== 'loyal'));
const InPrisonPayingAndLoyal = playerState.setIn(['agents', agents.indexOf(self), 'prison'], true);
const Killed = playerState.setIn(['agents', agents.indexOf(self), 'KIA'], true);
const Discovered = playerState.setIn(['countrystats', 5, 'obscurity'], 0.5).setIn(['countrystats', 4, 'obscurity'], 0.5).setIn(['countrystats', 3, 'obscurity'], 0);

describe('bad ends check', () => {// eslint-disable-line
  it('implements game logic', () => {// eslint-disable-line
    expect(badEndsCheck(playerState)).to.equal('');
    // expect(badEndsCheck(LeftInPrisonNotPaying)).to.equal('LeftInPrison');
    expect(badEndsCheck(LeftInPrisonPayingNoLoyal)).to.equal('LeftInPrison');
    expect(badEndsCheck(InPrisonPayingAndLoyal)).to.equal('');
    expect(badEndsCheck(Killed)).to.equal('Killed');
    expect(badEndsCheck(Discovered)).to.equal('Discovered');
  });
});
