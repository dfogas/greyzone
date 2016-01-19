import {expect} from 'chai';
import * as dashboardActions from 'client/dashboard/actions';

describe('hiring agents functionality', () => {
  it(' is defined', () => {
    expect(dashboardActions.hireAgent).to.exist;
  });
});

describe('missions accept functionality', () => {
  it(' is defined', () => {
    expect(dashboardActions.acceptMission).to.exist;
  });
});
