import {expect} from 'chai';
import * as equipmentActions from 'client/equipments/actions';

describe('some equipments functionality', () => {
  it('is defined', () => {
    expect(equipmentActions.buy).to.exist;
    expect(equipmentActions.lockDice).to.exist;
    expect(equipmentActions.sell).to.exist;
    expect(equipmentActions.use).to.exist;
  });
});
