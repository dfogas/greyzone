import {expect} from 'chai';
import leadershipCheck from '../bml/leadershipcheck';

import gameState from './data/game.state.test';
import playerState from './data/player.state.test';

describe('leadership check', () => {// eslint-disable-line no-undef
  it('returns enhancement name correctly', () => {// eslint-disable-line no-undef
    const enhancementnames = gameState.getIn(['globals', 'enhancements'])
      .filter(enh => enh.get('type') === 'leadership').map(enh => enh.get('name'));
    const playerenhancementnames = playerState.get('enhancements')
      .filter(enh => enh.get('type') === 'leadership').map(enh => enh.get('name'));

    expect(leadershipCheck(2, playerenhancementnames)).to.equal(true);
    expect(leadershipCheck(5, playerenhancementnames)).to.equal(true);
    expect(leadershipCheck(6, playerenhancementnames)).to.equal(false);
    expect(leadershipCheck(11, enhancementnames)).to.equal(true);
    expect(leadershipCheck(1, [])).to.equal(false);
  });
});
