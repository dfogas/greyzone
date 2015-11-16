import {expect} from 'chai';
import {dispatchToken} from 'client/agents/store';

describe('exports action Log String', () => {
  it('', () => {
    // console.log(dispatchToken); - LOGs ID:1 or ID: 2...
    expect(dispatchToken).to.be.a('string');
  });
});
