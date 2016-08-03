/* sanitize strings pro backspacy ..
  asi Covered
*/
import {expect} from 'chai';
import capitalLetter from '../general/capitalletter';

describe('capital letter', () => {// eslint-disable-line no-undef
  it('serves its purpose (and throws TypeError)', () => {// eslint-disable-line no-undef
    expect(capitalLetter).to.throw(TypeError);
    expect(capitalLetter(`johny`)).to.equal(`Johny`);
    expect(capitalLetter(`sere na`)).to.equal(`Sere na`);
    expect(capitalLetter(`lu-\t`)).to.equal(`Lu-\t`);
  });
});
