import './shift.up.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';

class ShiftUp extends Component {
  tierSelect() {
    const {tierdisplayed} = this.props;
    dashboardActions.statusTierSelect(tierdisplayed - 1);
  }

  render() {
    return (
      <div
        id='StatusesShiftUp'
        onClick={this.tierSelect.bind(this)}
        >
      </div>
    );
  }
}

export default ShiftUp;
