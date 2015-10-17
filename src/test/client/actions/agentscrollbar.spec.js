import {expect} from 'chai';
import * as scrollbarActions from 'client/agents/scrollbar/actions';

describe('scrolling capability', () => {
  it(' is defined', () => {
    expect(scrollbarActions.scrollLeft).to.exist;
    expect(scrollbarActions.scrollRight).to.exist;
  })
})
