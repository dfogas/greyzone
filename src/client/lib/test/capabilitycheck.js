import {expect} from 'chai';
import capabilityCheck from '../bml/capabilitycheck';

import gameState from './data/game.state.test';
import playerState from './data/player.state.test';

describe('capability check', () => {// eslint-disable-line no-undef
  it('returns enhancement name correctly', () => {// eslint-disable-line no-undef
    const enhancementnames = gameState.getIn(['globals', 'enhancements'])
      .filter(enh => enh.get('type') === 'capability').map(enh => enh.get('name'));
    const playerenhancementnames = playerState.get('enhancements')
      .filter(enh => enh.get('type') === 'capability').map(enh => enh.get('name'));

    expect(capabilityCheck(5, enhancementnames)).to.equal(true);
    expect(capabilityCheck(2, playerenhancementnames)).to.equal(true);
    expect(capabilityCheck(3, playerenhancementnames)).to.equal(true);
    expect(capabilityCheck(4, playerenhancementnames)).to.equal(false);
    expect(capabilityCheck(1, [])).to.equal(false);
  });
});
