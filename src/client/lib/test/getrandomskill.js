/* Covered */
import {expect} from 'chai';
import getRandomSkill from '../bml/getrandomskill';

const skills1 = {operationsSkill: 1, electronicsSkill: 2, stealthSkill: 7};
const skills2 = {operationsSkill: 7, electronicsSkill: 5, stealthSkill: 1};
const skills3 = {operationsSkill: 1, electronicsSkill: 7, stealthSkill: 1};
const skills4 = {operationsSkill: 1, electronicsSkill: 2, stealthSkill: 8};

describe('get random skill', () => {// eslint-disable-line no-undef
  it('produces string of agent skill', () => {// eslint-disable-line no-undef
    for (let i = 20; i > 0; i -= 1)
      expect(getRandomSkill(7, skills1)).to.be.oneOf(['electronicsSkill', 'operationsSkill']);
    for (let i = 20; i > 0; i -= 1)
      expect(getRandomSkill(7, skills2)).to.be.oneOf(['electronicsSkill', 'stealthSkill']);
    for (let i = 20; i > 0; i -= 1)
      expect(getRandomSkill(7, skills3)).to.be.oneOf(['operationsSkill', 'stealthSkill']);
    for (let i = 20; i > 0; i -= 1)
      expect(getRandomSkill(7, skills4)).to.be.oneOf(['electronicsSkill', 'operationsSkill']);
  });
});
