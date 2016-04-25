var generateName = require('../../../server/lib/greyzone/name.generator');

const chai = require('chai');

const expect = chai.expect;

describe('Name Generator', () => {
  it('should return string no shorter than 3 not longer than 10 characters', () => {
    const name = generateName('greyzone');
    expect(name).to.be.a('string');
    expect(name.length).to.be.at.least(3);
    expect(name.length).to.be.below(11);
  });
});
