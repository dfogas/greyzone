import './escapebutton.styl';
import * as missionActions from '../../actions';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class EscapeButton extends Component {
  missionFail() {
    const {activemission} = this.props;
    missionActions.fail(activemission);
  }

  render() {
    return (
      <input className='escape-button' onClick={this.missionFail.bind(this)} type='button' value='Initiate escape sequence' />
    );
  }
}

EscapeButton.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map)
};

export default EscapeButton;
