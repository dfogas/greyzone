import {render} from '../utils/utils';
import {expect} from 'chai';
import React from 'react';
import AgentClock from '../../../agents/agentcard/agent.clock.react';

import AgentOne from '../data/agent.one.test';

describe('Agent Clock Component', () => {// eslint-disable-line no-undef
  it('renders correctly', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentClock
        agent={AgentOne}
        id='Action'
        name='action'
        onSave={() => {}}
        onState={() => {}}
        text='a'
        />
    );
    expect(component.type).to.equal('div');
    expect(component.props.className).to.have.string('agent-eta-clock');
    expect(component.props.children).to.equal('Ready');
  });
  it('if ETA greater than Date.Now() renders correctly', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentClock
        agent={AgentOne.set('ETA', Date.now() + 10 * 60 * 1000 + 1000)}
        id='Action'
        name='action'
        onSave={() => {}}
        onState={() => {}}
        text='a'
        />
    );
    expect(component.props.children).to.equal('0:10');
  });
});
