import {expect} from 'chai';
import * as missionActions from 'client/mission/actions';

describe('mission walkthrough functionality', () => {
  it('is defined', () => {
    expect(missionActions.select).to.exist;
    expect(missionActions.fail).to.exist;
    expect(missionActions.controldamage).to.exist;
    expect(missionActions.end).to.exist;
    expect(missionActions.success).to.exist;
    expect(missionActions.taskCompleted).to.exist;
  });
});
