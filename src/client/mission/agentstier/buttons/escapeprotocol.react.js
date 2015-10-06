import './escapeprotocol.css';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import * as missionActions from '../../actions';

class EscapeProtocol extends Component {
  controldamage() {
    const {activemission} = this.props;
    missionActions.controldamage(activemission);
  }

  render() {
    const {activemission} = this.props;
    return (
      <input className='escape-protocol' onClick={this.controldamage.bind(this)} type='button' value='Control Damage' />
    );
  }
}

EscapeProtocol.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map)
};

export default EscapeProtocol;
