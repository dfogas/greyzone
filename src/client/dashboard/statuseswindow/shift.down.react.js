import './shift.down.styl';
import * as statusesActions from './actions';
import Component from '../../components/component.react';
import React from 'react';

class ShiftDown extends Component {
  tierSelect() {
    const {tierdisplayed} = this.props;
    statusesActions.statusTierSelect(tierdisplayed + 1);
  }

  render() {
    return (
      <div
        id='StatusesShiftDown'
        onClick={this.tierSelect.bind(this)}>
      </div>
    );
  }
}

ShiftDown.propTypes = {
  tierdisplayed: React.PropTypes.number
};

export default ShiftDown;
