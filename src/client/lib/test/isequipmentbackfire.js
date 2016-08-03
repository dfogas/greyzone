/* Covered */
import {expect} from 'chai';
import isEquipmentBackfire from '../bml/isequipmentbackfire';

import AgentOne from './data/agent.one.test';
import HandyKit from './data/equipments/handy.kit.test';
import CustomTools from './data/equipments/custom.tools.test';

describe('is equipment backfire', () => {// eslint-disable-line no-undef
  it('checks for heavy equipment', () => {// eslint-disable-line no-undef
    for (let i = 20; i > 0; i -= 1)
      expect(isEquipmentBackfire(AgentOne, HandyKit)).to.equal(false);
  });
  it('random function returns properly distributed results', () => {// eslint-disable-line no-undef
    let distResList = [];
    for (let i = 100; i > 0; i -= 1)
      distResList.push(isEquipmentBackfire(AgentOne, CustomTools));
    expect(distResList.filter(item => item === true)).to.have.length.within(35, 65);
  });
});
