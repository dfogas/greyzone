import Component from '../../components/component.react'; //
import React from 'react';
import immutable from 'immutable';
import $ from 'jquery';

class PlayerHistorySlideText extends Component {
  componentDidUpdate() {
    $('.player-history-slide-text-overlay').css({width: '1540px'});
    TweenMax.to('.player-history-slide-text-overlay', 5, {width: 0});
  }

  componentDidMount() {
    TweenMax.to('.player-history-slide-text-overlay', 5, {width: 0});
  }

  render() {
    const {slideNo, tutorial} = this.props;
    return (
      <div className='player-history-slide-text'>
        {tutorial.getIn(['playerhistory', 'slides', slideNo])}
      </div>
    );
  }
}

PlayerHistorySlideText.propTypes = {
  slideNo: React.PropTypes.number,
  tutorial: React.PropTypes.instanceOf(immutable.Map)
};

export default PlayerHistorySlideText;
