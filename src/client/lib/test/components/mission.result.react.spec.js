/* TBD */
import {render} from '../utils/utils';
import {expect} from 'chai';
import React from 'react';
import MissionResult from '../../../mission/missioncard/results/mission.result.react';

describe('mission result', () => {// eslint-disable-line no-undef
  it('renders correctly', () => {// eslint-disable-line no-undef
    const component = render(
      <MissionResult
        id='id'
        isReward={true}
        isTask={true}
        name='missionresult'
        onSave={() => {}}
        onState={() => {}}
        reward={1000}
        rewardkey={'gameContacts'}
        text='a'
        />
    );
    expect(component.type).to.equal('div');
    expect(component.props.className).to.have.string('mission-result');
    expect(component.props.className).to.have.string(' reward');
    expect(component.props.className).to.have.string(' task');
    expect(JSON.parse(JSON.stringify(component.props.children)).filter(item => item)).to.have.length(1);
  });
});
