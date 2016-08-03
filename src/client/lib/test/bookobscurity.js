import {expect} from 'chai';
import bookObscurity from '../bml/bookobscurity';

describe('book obscurity', () => {// eslint-disable-line no-undef
  it('returns value between 0 and 3 no matter the change or initial value', () => {// eslint-disable-line no-undef
    expect(bookObscurity(0, 1)).to.equal(1);
    expect(bookObscurity(2, 2)).to.equal(3);
    expect(bookObscurity(-1, 0)).to.equal(0);
  });
});
