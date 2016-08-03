import {expect} from 'chai';
import {render} from '../utils/utils';
import Action from '../../../mission/missioncard/action.react';
import React from 'react';
import immutable from 'immutable';

describe('Action Component in Mission Card', () => {// eslint-disable-line no-undef
  it('is list element with action class', () => {// eslint-disable-line no-undef
    const component = render(
      <Action
        action={immutable.fromJS({imgsrc: 'trololo.jpg', name: 'trololo', type: 'stealth'})}
        id='Action'
        name='action'
        onSave={() => {}}
        onState={() => {}}
        text='a'
        />
    );

    expect(component.type).to.equal('li');
    expect(component.props.className).to.equal('action trololo stealth');
  });
});
