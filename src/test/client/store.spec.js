import {expect} from 'chai';
import {dispatchToken} from 'client/agents/store';

describe('exports action Log String', () => {
  it('', () => {
    console.log(dispatchToken);
    expect(dispatchToken).to.be.a('string');
  })
})
