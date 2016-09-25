import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import $ from 'jquery';

class PlayerHistorySlideText extends Component {
  componentDidUpdate() {
    $('.player-history-slide-text-overlay').css({width: '1540px'});
    TweenMax.to('.player-history-slide-text-overlay', 3, {width: 0});//eslint-disable-line no-undef
  }

  componentDidMount() {
    TweenMax.to('.player-history-slide-text-overlay', 3, {width: 0});//eslint-disable-line no-undef
  }

  render() {
    const {slideNo, tutorial} = this.props;
    return (
      <div className='player-history-slide-text'>
        {tutorial.getIn(['playerhistory', 'slides', slideNo, 'text'])}
      </div>
    );
  }
}

PlayerHistorySlideText.propTypes = {
  slideNo: React.PropTypes.number,
  tutorial: React.PropTypes.instanceOf(immutable.Map)
};

export default PlayerHistorySlideText;
