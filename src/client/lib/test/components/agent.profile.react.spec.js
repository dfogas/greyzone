import {expect} from 'chai';
import {render} from '../utils/utils';
import React from 'react';
import AgentProfile from '../../../agents/agentcard/agent.profile.react';

import AgentOne from '../data/agent.one.test';
import AgentTwo from '../data/agent.two.test';

describe('Agent Profile Component', () => {// eslint-disable-line no-undef
  it('renders default correctly', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentProfile
        agent={AgentOne}
        id='Action'
        isShowcased={true}
        name='action'
        onSave={() => {}}
        onState={() => {}}
        self={AgentTwo}
        text='a'
        />
    );
    expect(component.type).to.equal('div');
    expect(component.props.className).to.have.string('agent-profile');
    expect(component.props.className).to.have.string(' showcased');
    expect(JSON.parse(JSON.stringify(component.props.children)).filter(item => item)).to.have.length(2);
  });
  it('renders correctly if KIA', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentProfile
        agent={AgentOne.set('KIA', true)}
        id='Action'
        isShowcased={true}
        name='action'
        onSave={() => {}}
        onState={() => {}}
        self={AgentTwo}
        text='a'
        />
    );
    expect(JSON.parse(JSON.stringify(component.props.children)).filter(item => item)).to.have.length(4);
  });
  it('renders correctly if loyal and in prison and beingsaved', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentProfile
        agent={AgentOne.set('prison', true).set('loyalty', 'loyal')}
        agentbeingsaved={AgentOne.set('prison', true).set('loyalty', 'loyal')}
        id='Action'
        isShowcased={true}
        name='action'
        onSave={() => {}}
        onState={() => {}}
        self={AgentTwo}
        text='a'
        />
    );
    expect(JSON.parse(JSON.stringify(component.props.children)).filter(item => item)).to.have.length(5);
  });

});
