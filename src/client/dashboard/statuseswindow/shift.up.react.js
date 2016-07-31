import './shift.up.styl';
import * as statusesActions from './actions';
import Component from '../../components/component.react';
import React from 'react';

class ShiftUp extends Component {
  tierSelect() {
    const {tierdisplayed} = this.props;
    statusesActions.statusTierSelect(tierdisplayed - 1);
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

ShiftUp.propTypes = {
  tierdisplayed: React.PropTypes.number
};

export default ShiftUp;
