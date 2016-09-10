/* Covered */
import {expect} from 'chai';
import {render} from '../utils/utils';
import Task from '../../../mission/missioncard/tasks/task.react';
import React from 'react';
import immutable from 'immutable';
import GameState from '../data/game.state.test';
import PlayerState from '../data/player.state.test';

/* LESSON: Reach.Children utility helps manipulate opaque data structure of component.props.children */

describe('task react component', () => {// eslint-disable-line no-undef
  it('renders correctly', () => {// eslint-disable-line no-undef
    const component = render(
      <Task
        game={GameState}
        id='Task'
        jsonapi={PlayerState}
        name='task'
        onSave={() => {}}
        onState={() => {}}
        task={immutable.fromJS([
          {imgsrc: 'trololo.jpg', name: 'trololo', type: 'stealth'},
          {imgsrc: 'bonjour.jpg', name: 'bonjour', type: 'electronics'},
          {imgsrc: 'lodyha.jpg', name: 'lodyha', type: 'operations'}
        ])}
        text='a'
        />
    );
    expect(component.type).to.equal('div');
    expect(component.props.className).to.equal('task-fieldset');
    expect(React.Children.count(component.props.children)).to.equal(3);
  });
});
