import Component from '../components/component.react';
import React from 'react';
import PlayerBadge from './playerbadge.react.js';
import immutable from 'immutable';

class PlayerRecord extends Component {
  render() {
    const {player} = this.props;
    return (
      <div className='player-record'>
        <div className='ranking'>{player.get('title')}</div>
        <div className='player-name'>{player.get('name')}</div>
        <div className='player-cash'>{player.get('gameCash')}</div>
        <div className='player-contacts'>{player.get('gameContacts')}</div>
        <PlayerBadge />
      </div>
    );
  }
}

PlayerRecord.propTypes = {
  player: React.PropTypes.instanceOf(immutable.Map)
};

export default PlayerRecord;
