import './options.pointer.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';

class OptionsPointer extends Component {
  pointerChange() {
    dashboardActions.pointerChange('options');
  }

  render() {
    return (
      <div
        className='dashboardscreen-pointer'
        id='ToOptions'
        onClick={this.pointerChange}
        >
        Options
      </div>
    );
  }
}

export default OptionsPointer;
