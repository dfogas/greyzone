import App from 'client/app/app.react';
import React from 'react/addons';
import Footer from 'client/app/footer.react';
import {RouteHandler} from 'react-router';
import {expect} from 'chai'; // http://chaijs.com/api/bdd
import {render} from 'test/utils';

describe('App', () => {

  it('should render default view', () => {
    const component = render(
      <App
      // These props are required. We can't test warnings yet.
        id="1"
        name="foo"
        onSave={() => {}}
        onState={() => {}}
        text="a"
      >
        <RouteHandler {...this.state} />
        <Footer />
      </App>
    );

    expect(component.type).to.equal('div');
    expect(component.props.className).to.equal('page');
  });

  it('should recieve state', () => {
    return true;
  });

});
