import React from 'react/addons';
import {expect} from 'chai'; // http://chaijs.com/api/bdd
import {render} from 'test/utils';
import Action from 'client/mission/missioncard/action.react';

describe('Action is well defined', () => {

  const component = render(
    <Action
    // These props are required. We can't test warnings yet.
      id="1"
      name="foo"
      onSave={() => {}}
      onState={() => {}}
      text="a"
    />
  );

  it('should recieve props', () => {

    component.props.numberprop = 0;
    component.props.stringprop = 'str';

    expect(component.props.numberprop).to.be.a('number');
    expect(component.props.stringprop).to.be.a('string');
  });

  it('has type and class', () => {

    expect(component.type).to.equal('div');
    expect(component.props.className).to.contain('action');
  });
});
