import {expect} from 'chai';
import * as missionActions from 'client/mission/actions';

describe('mission walkthrough functionality', () => {
  it('is defined', () => {
    expect(missionActions.controldamage).to.exist;
    expect(missionActions.fail).to.exist;
    expect(missionActions.success).to.exist;
  });
});
