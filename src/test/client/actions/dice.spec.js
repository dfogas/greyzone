import {expect} from 'chai';
import * as diceActions from 'client/mission/tabletoptier/dice/actions';

describe('dice CRUD', () => {
  it('is implemented in some way', () => {
    expect(diceActions.create).to.exist;
    expect(diceActions.roll).to.exist;
    expect(diceActions.rollAll).to.exist;
    expect(diceActions.remove).to.exist;
  });
});
