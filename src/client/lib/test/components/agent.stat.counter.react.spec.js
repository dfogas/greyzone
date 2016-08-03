/* covered */
import {render} from '../utils/utils';
import {expect} from 'chai';
import React from 'react';
import AgentStatCounter from '../../../agents/agentcard/agent.stat.counter.react';

describe('AgentStatCounter component', () => {// eslint-disable-line no-undef
  it('renders correctly', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentStatCounter
        id='id'
        isShowcased={true}
        name='AgentStatCounter'
        onSave={() => {}}
        onState={() => {}}
        skill={4}
        skillname='electronics'
        text='a'
        />
    );
    expect(component.type).to.equal('div');
    expect(component.props.className).to.have.string(' showcased');
    expect(component.props.className).to.have.string('agent-stat-counter');
    expect(component.props.className).to.have.string(' electronics');
    expect(component.props.children).to.equal(4);
  });
});
