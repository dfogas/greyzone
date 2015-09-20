import CountryInfoContent from 'client/countries/infocontent.react';
import immutable from 'immutable';
import React from 'react/addons';
import {expect} from 'chai'; // http://chaijs.com/api/bdd
import {render} from 'test/utils';

describe('Country List Not empty', () => {

  it('should render default view', () => {
    let countries = immutable.fromJS([{name: 'Taipei', reputation: 200, obscurity: 2.0}]);
    let pendingActions = immutable.fromJS({});
    const component = render(
      <CountryInfoContent
        // These props are required. We can't test warnings yet.
        countries = {countries}
        id="1"
        name="foo"
        onSave={() => {}}
        onState={() => {}}
        pendingActions = {pendingActions}
        text="a"
      />
    );

    expect(component.type).to.equal('div');
    expect(component.props.id).to.equal('InfoContent');
  });
});
