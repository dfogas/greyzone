import {render} from '../utils/utils';
import {expect} from 'chai';
import React from 'react';
import AgentExperienceBar from '../../../agents/agentcard/agent.experience.bar.react';

import AgentOne from '../data/agent.one.test';
import AgentTwo from '../data/agent.two.test';
import Game from '../data/game.state.test';

describe('agent experience bar component', () => {// eslint-disable-line no-undef
  it('renders correctly', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentExperienceBar
        agent={AgentTwo}
        game={Game}
        id='id'
        isShowcased={true}
        name='experiencebar'
        onSave={() => {}}
        onState={() => {}}
        text='a'
        />
    );
    expect(component.type).to.equal('div');
    expect(component.props.className).to.have.string('agent-experience-bar');
    expect(component.props.className).to.have.string(' showcased');
    expect(React.Children.only(component.props.children).props.className).to.have.string('rankup-progress-bar');
    expect(React.Children.only(component.props.children).props.className).to.have.string(' showcased');
    expect(React.Children.only(component.props.children).props.style.width).to.equal('100%');
  });
  it('calculates the width of rankup progress correctly', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentExperienceBar
        agent={AgentOne}
        game={Game}
        id='id'
        isShowcased={true}
        name='experiencebar'
        onSave={() => {}}
        onState={() => {}}
        text='a'
        />
    );
    expect(React.Children.only(component.props.children).props.style.width).to.have.string('42.85');
  });
});
