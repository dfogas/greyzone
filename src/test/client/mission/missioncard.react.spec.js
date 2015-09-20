import React from 'react/addons';
import {expect} from 'chai'; // http://chaijs.com/api/bdd
import {render} from 'test/utils';
import MissionCard from 'client/mission/missioncard/missioncard.react';

describe('MissionCard is well defined', () => {

  const component = render(
    <MissionCard
    // These props are required. We can't test warnings yet.
      id="1"
      name="foo"
      onSave={() => {}}
      onState={() => {}}
      text="a"
    />
  );

  it('should recieve props', () => {

    component.props.fakeprop = 'fake-prop';

    expect(component.props.fakeprop).to.be.a('string');
  });

  it('has type and class', () => {

    expect(component.type).to.equal('div');
    expect(component.props.className).to.equal('mission-card');
  });
});
