import Component from '../components/component.react';
import React from 'react';
import PlayerRecord from './playerrecord.react.js';
import immutable from 'immutable';

class PlayersList extends Component {
  render() {
    const {players} = this.props;
    return (
      <div id='PlayersList'>
        {players.map(player => {
          return (
            <PlayerRecord
              player={player}
            />
          );
        })}
      </div>
    );
  }
}

PlayersList.propTypes = {
  players: React.PropTypes.instanceOf(immutable.List)
};

export default PlayersList;
