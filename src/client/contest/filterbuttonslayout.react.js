import Component from '../components/component.react';
import React from 'react';
import OrderedFilterDisplayButton from './orderedfilterdisplaybutton.react';

class FilterButtonsLayout extends Component {
  render() {
    return (
      <div id='FilterButtonsLayout'>
        <OrderedFilterDisplayButton text='1-100' />
        <OrderedFilterDisplayButton text='101-250' />
        <OrderedFilterDisplayButton text='251-500' />
        <OrderedFilterDisplayButton text='501+' />
      </div>
    );
  }
}

export default FilterButtonsLayout;
