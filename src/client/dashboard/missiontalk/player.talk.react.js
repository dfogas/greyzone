import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class PlayerTalk extends Component {
  render() {
    const {player, talk} = this.props;
    return (
      <div className='player-talk'>
        <div>{talk}</div>
        <img src={player.get('imgsrc')} />
      </div>
    );
  }
}

PlayerTalk.propTypes = {
  player: React.PropTypes.instanceOf(immutable.Map),
  talk: React.PropTypes.string
};

export default PlayerTalk;
