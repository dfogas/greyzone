import React from 'react/addons';
import {expect} from 'chai'; // http://chaijs.com/api/bdd
import {render} from 'test/utils';
import AgentCard from 'client/agents/agentcard/agentcard.react';

import immutable from 'immutable';
import agents from 'client/lib/agents';

describe('Agentcard is well defined', () => {

  var agent=immutable.fromJS(agents.list[0]);
  console.log(agent);

  const component = render(
    // These props are required. We can't test warnings yet.
    <AgentCard
      agent={agent}
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
