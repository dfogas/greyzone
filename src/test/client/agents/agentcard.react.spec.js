import React from 'react/addons';
import {expect} from 'chai'; // http://chaijs.com/api/bdd
import {render} from 'test/utils';
import AgentCard from 'client/agents/agentcard.react';

describe('Agent profile is well defined', () => {

  const component = render(
    <AgentCard
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

    expect(component.type).to.equal('li');
    expect(component.props.className).to.equal('agent-card');
  });
});
