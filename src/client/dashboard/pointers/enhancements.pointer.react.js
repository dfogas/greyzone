import './enhancements.pointer.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';

class EnhancementsPointer extends Component {
  pointerChange() {
    dashboardActions.pointerChange('enhancements');
  }

  render() {
    return (
      <div
        className='dashboardscreen-pointer'
        id='ToEnhancements'
        onClick={this.pointerChange}
        >
        Enhancements
      </div>
    );
  }
}

export default EnhancementsPointer;
