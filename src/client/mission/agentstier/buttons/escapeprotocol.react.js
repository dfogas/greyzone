import './escapeprotocol.styl';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../../intl/store';

import * as missionActions from '../../actions';

class EscapeProtocol extends Component {
  controldamage() {
    const {activemission} = this.props;
    missionActions.controldamage(activemission);
  }

  render() {
    const {activemission} = this.props;
    return (
      <input
        className='escape-protocol'
        onClick={this.controldamage.bind(this)}
        type='button'
        value={msg('mission.buttons.dcp')}
        />
    );
  }
}

EscapeProtocol.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map)
};

export default EscapeProtocol;
