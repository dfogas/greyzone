import './player.history.intro.styl';
import Component from '../../components/component.react';
import React from 'react';
import {msg} from '../../intl/store';
import immutable from 'immutable';

import PlayerHistoryPhoto from './player.history.photo.react';

class PlayerHistoryIntro extends Component {
  render() {
    const {tutorial} = this.props;
    return (
      <div id='PlayerHistoryIntro'>
        <PlayerHistoryPhoto
          tutorial={tutorial}
          />
      </div>
    );
  }
}

PlayerHistoryIntro.propTypes = {
  tutorial: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default PlayerHistoryIntro;
