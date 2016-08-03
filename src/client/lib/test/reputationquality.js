/* Covered */
import {expect} from 'chai';
import rQ from '../bml/reputationquality';

describe('reputation quality', () => {// eslint-disable-line no-undef
  it('throws an error if invalid type is fed to it', () => {// eslint-disable-line no-undef
    expect(rQ).to.throw(TypeError);
  });
  it('returns appropriate test string based on number fed to it', () => {// eslint-disable-line no-undef
    expect(rQ(-5001)).to.equal('catastrophic');
    expect(rQ(-5000)).to.equal('unreliable');
    expect(rQ(-1501)).to.equal('unreliable');
    expect(rQ(-1500)).to.equal('unremarkable');
    expect(rQ(4999)).to.equal('good');
    expect(rQ(5000)).to.equal('excellent');
  });
});
