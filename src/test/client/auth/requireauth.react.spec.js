import Component from 'client/components/component.react';
import React from 'react';
import requireAuth from 'client/auth/requireauth.react';
import {expect} from 'chai'; // http://chaijs.com/api/bdd
import {render} from 'test/utils';

describe('facilitates component\'s authentication', () => {
  it('exports authenticated component', () => {
    class TestComponent extends Component {
      render() {
        return (
          <div className='test-component'></div>
        );
      }
    }

    const component = requireAuth(
      render(
        <TestComponent
          id="1"
          name="foo"
          onSave={() => {}}
          onState={() => {}}
          text="a"
        />
      )
    );

    expect(component.name).to.equal('Authenticated');
  });
});
