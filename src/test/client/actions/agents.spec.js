import * as agentActions from 'client/agents/actions';
import {expect} from 'chai';

describe('agentToArmory ', () => {
  it('is defined', () => {
    // TODO: Add real test.
    expect(agentActions.agentToArmory).to.exist;
  });
});

describe('assignMission ', () => {
  it('is defined', () => {
    expect(agentActions.assignMission).to.exist;
  });
});

describe('assignTask ', () => {
  it('is defined', () => {
    expect(agentActions.assignTask).to.exist;
  });
});

describe('backtoAssignment ', () => {
  it('is defined', () => {
    expect(agentActions.backtoAssignment).to.exist;
  });
});

describe('backtoRoster ', () => {
  it('is defined', () => {
    expect(agentActions.backtoRoster).to.exist;
  });
});

describe('equip ', () => {
  it('is defined', () => {
    expect(agentActions.equip).to.exist;
  });
});

describe('getLevel ', () => {
  it('is defined', () => {
    expect(agentActions.getLevel).to.exist;
  });
});

describe('goFree ', () => {
  it('is defined', () => {
    expect(agentActions.goFree).to.exist;
  });
});

describe('goToPrison ', () => {
  it('is defined', () => {
    expect(agentActions.goToPrison).to.exist;
  });
});