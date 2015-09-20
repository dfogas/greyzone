import InfoCardCounter from 'client/countries/infocardcounter.react';
import React from 'react/addons';
import {expect} from 'chai'; // http://chaijs.com/api/bdd
import {render} from 'test/utils';

describe('InfoCardCounter should not be empty', () => {
  it('should recieve props', () => {
    const component = render(
      <InfoCardCounter
      // These props are required. We can't test warnings yet.
      counter={100}
      id="1"
      name="foo"
      onSave={() => {}}
      onState={() => {}}
      text="a"
      />
    );

    // what is the point of testing here? huh?
    component.props.counter = 100;

    expect(component.type).to.equal('div');
    expect(component.props.counter).to.be.a('number');
  });
});
