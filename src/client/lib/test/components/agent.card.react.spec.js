// import fs from 'fs';
import {render} from '../utils/utils';
import {expect} from 'chai';
import React from 'react';
import AgentCard from '../../../agents/agentcard/agent.card.react';

import AgentOne from '../data/agent.one.test';
import AgentTwo from '../data/agent.two.test';
import PlayerAgent from '../data/player.agent.test';
import GameState from '../data/game.state.test';
import PlayerState from '../data/player.state.test';

describe('agent card component', () => {// eslint-disable-line no-undef
  it('renders correctly', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentCard
        agent={AgentOne}
        game={GameState}
        id='id'
        isMission={true}
        jsonapi={PlayerState}
        name='agentcard'
        onSave={() => {}}
        onState={() => {}}
        text='a'
        />
    );
    expect(component.type).to.equal('li');
    expect(component.props.className).to.have.string('agent-card');
    expect(component.props.className).not.have.string(' showcased');
    expect(component.props.className).to.have.string(' on-mission');
    expect(JSON.parse(JSON.stringify(component.props.children)).filter(item => item)).to.have.length(4);
  });
  it('renders for agent in prison and not being saved', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentCard
        agent={AgentOne.set('prison', true)}
        game={GameState}
        id='id'
        isShowcased={true}
        jsonapi={PlayerState.setIn(['dashboard', 'agentondisplay'], AgentOne.set('prison', true))}
        name='agentcard'
        onSave={() => {}}
        onState={() => {}}
        text='a'
        />
    );
    expect(JSON.parse(JSON.stringify(component.props.children)).filter(item => item)).to.have.length(7);
  });
  it('renders for agent in prison and being saved', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentCard
        agent={AgentOne.set('prison', true)}
        game={GameState}
        id='id'
        isShowcased={true}
        jsonapi={PlayerState.setIn(['dashboard', 'agentondisplay'], AgentOne.set('prison', true)).set('agentbeingsaved', AgentOne.set('prison', true))}
        name='agentcard'
        onSave={() => {}}
        onState={() => {}}
        text='a'
        />
    );
    // fs.writeFile('shit.js', JSON.stringify(JSON.parse(JSON.stringify(component.props.children)).filter(item => item)), (err) => {
    //   if (err)
    //     throw err;
    //   console.log(`It's saved.`);
    // });
    expect(JSON.parse(JSON.stringify(component.props.children)).filter(item => item)).to.have.length(6);
  });
  it('renders correctly for agent on display', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentCard
        agent={AgentTwo.set('prison', true)}
        game={GameState}
        id='id'
        isShowcased={true}
        jsonapi={PlayerState.setIn(['dashboard', 'agentondisplay', 'id'], AgentTwo.get('id'))}
        name='agentcard'
        onSave={() => {}}
        onState={() => {}}
        text='a'
        />
    );
    expect(JSON.parse(JSON.stringify(component.props.children)).filter(item => item)).to.have.length(7);
  });
  it('renders correctly for agent in armory', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentCard
        agent={AgentOne}
        game={GameState}
        id='id'
        isShowcased={true}
        jsonapi={PlayerState}
        name='agentcard'
        onSave={() => {}}
        onState={() => {}}
        text='a'
        />
    );
    expect(JSON.parse(JSON.stringify(component.props.children)).filter(item => item)).to.have.length(4);
  });
  it('renders correctly for agent on task', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentCard
        agent={AgentOne}
        game={GameState}
        id='id'
        isMission={true}
        isShowcased={true}
        jsonapi={PlayerState}
        name='agentcard'
        onSave={() => {}}
        onState={() => {}}
        text='a'
        />
    );
    expect(JSON.parse(JSON.stringify(component.props.children)).filter(item => item)).to.have.length(4);
  });
  it('renders correctly for agent in agent roster with due for rankup', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentCard
        agent={AgentTwo}
        game={GameState}
        id='id'
        isAgents={true}
        jsonapi={PlayerState}
        name='agentcard'
        onSave={() => {}}
        onState={() => {}}
        text='a'
        />
    );
    expect(JSON.parse(JSON.stringify(component.props.children)).filter(item => item)).to.have.length(5);
  });
  it('renders correctly for PlayerAgent (in Players Window)', () => {// eslint-disable-line no-undef

    const component = render(
      <AgentCard
        agent={PlayerAgent}
        game={GameState}
        id='id'
        jsonapi={PlayerState.update('agents', val => val.delete(val.indexOf(PlayerAgent)))}
        name='agentcard'
        onSave={() => {}}
        onState={() => {}}
        text='a'
        />
    );
    expect(JSON.parse(JSON.stringify(component.props.children)).filter(item => item)).to.have.length(5);
  });
  it('renders correctly self on display', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentCard
        agent={PlayerAgent}
        game={GameState}
        id='id'
        isDisplay={true}
        jsonapi={PlayerState.setIn(['dashboard', 'agentondisplay'], PlayerAgent)}
        name='agentcard'
        onSave={() => {}}
        onState={() => {}}
        text='a'
        />
    );
    expect(JSON.parse(JSON.stringify(component.props.children)).filter(item => item)).to.have.length(5);
  });
  it('renders correctly for self on display and in prison', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentCard
        agent={PlayerAgent.set('prison', true)}
        game={GameState}
        id='id'
        isDisplay={true}
        jsonapi={PlayerState.setIn(['dashboard', 'agentondisplay'], PlayerAgent)}
        name='agentcard'
        onSave={() => {}}
        onState={() => {}}
        text='a'
        />
    );
    expect(JSON.parse(JSON.stringify(component.props.children)).filter(item => item)).to.have.length(5);
  });
  it('renders correctly for self on display and in prison and being saved', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentCard
        agent={PlayerAgent.set('prison', true)}
        game={GameState}
        id='id'
        isDisplay={true}
        jsonapi={PlayerState.setIn(['dashboard', 'agentondisplay'], PlayerAgent).set('agentbeingsaved', PlayerAgent.set('prison', true))}
        name='agentcard'
        onSave={() => {}}
        onState={() => {}}
        text='a'
        />
    );
    expect(JSON.parse(JSON.stringify(component.props.children)).filter(item => item)).to.have.length(5);
  });
});
