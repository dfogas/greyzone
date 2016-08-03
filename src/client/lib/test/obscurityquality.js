import {expect} from 'chai';
import oQ from '../bml/obscurityquality';

describe('obscurity quality', () => {// eslint-disable-line no-undef
  it('translates number to string per defined muster', () => {// eslint-disable-line no-undef
    // expect(oQ(-1)).to.throw(RangeError); // need to figure this out yet
    expect(oQ(0)).to.equal('vulnerable');
    expect(oQ(1.5)).to.equal('safe');
    expect(oQ(3)).to.equal('invisible');
  });
});
