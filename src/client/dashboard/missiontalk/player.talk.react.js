import Component from '../../components/component.react';
import React from 'react';

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

export default PlayerTalk;
