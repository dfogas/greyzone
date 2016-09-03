import './player.history.photo.styl';
import * as tutorialActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
// import {msg} from '../../intl/store';
import immutable from 'immutable';

import PlayerHistorySlideText from './player.history.slide.text.react';

class PlayerHistoryPhoto extends Component {

  historyProgress() {
    const {tutorial} = this.props;
    const slideNo = tutorial.getIn(['playerhistory', 'slideNo']) || 0;
    tutorialActions.historyProgress(slideNo);
  }

  render() {
    const {tutorial} = this.props;
    const slideNo = tutorial.getIn(['playerhistory', 'slideNo']) || 0;
    return (
      <div
        id='PlayerHistoryPhoto'
        onClick={this.historyProgress.bind(this)}>
        <PlayerHistorySlideText slideNo={slideNo} tutorial={tutorial} />
        <div className='player-history-slide-text-overlay'>
        </div>
      </div>
    );
  }
}

PlayerHistoryPhoto.propTypes = {
  tutorial: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default PlayerHistoryPhoto;
