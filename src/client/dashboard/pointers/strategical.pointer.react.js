import './strategical.pointer.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';

class StrategicalPointer extends Component {
  pointerChange() {
    dashboardActions.pointerChange('strategical');
  }

  render() {
    return (
      <div
        className='dashboardscreen-pointer'
        id='ToStrategical'
        onClick={this.pointerChange}
        >
        Strategical
      </div>
    );
  }
}

export default StrategicalPointer;
