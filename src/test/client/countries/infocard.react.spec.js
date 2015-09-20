// import CountryInfoCard from 'client/countries/infocard.react';
// import React from 'react/addons';
// import {expect} from 'chai'; // http://chaijs.com/api/bdd
// import {render} from 'test/utils';
// import immutable from 'immutable';
// import {msg} from 'client/intl/store';

// describe('CountryInfoCard is well defined', () => {
//
//   const component = render(
//     <CountryInfoCard
//     // These props are required. We can't test warnings yet.
//       id="1"
//       country={immutable.fromJS({name:'Alaska', reputation: 150, obscurity: 1.2})}
//       name="foo"
//       onSave={() => {}}
//       onState={() => {}}
//       pendingActions={immutable.fromJS({})}
//       text="a"
//     />
//   );
//
//   it('should recieve props', () => {
//
//     component.props.numberprop = 0;
//     component.props.stringprop = 'str';
//
//     expect(component.props.numberprop).to.be.a('number');
//     expect(component.props.stringprop).to.be.a('string');
//   });
//
//   it('has type and class', () => {
//
//     expect(component.type).to.equal('div');
//     expect(component.props.className).to.contain('Info-card');
//   })
//
//   it('recieves data from state and actions from view-controller', () => {
//     expect(component.props.pendingActions).not.to.be.undefined;
//     expect(component.props.country.name).to.be.equal('Alaska');
//   })
// });
