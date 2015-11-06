import './escapebutton.styl';
import * as missionActions from '../../actions';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../../intl/store';

class EscapeButton extends Component {
  missionFail() {
    const {activemission} = this.props;
    missionActions.checkFatalities();
    missionActions.fail(activemission);
  }

  render() {
    return (
      <input
        className='escape-button'
        onClick={this.missionFail.bind(this)}
        type='button'
        value={msg('mission.buttons.escapesequence')}
        />
    );
  }
}

EscapeButton.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map)
};

export default EscapeButton;
