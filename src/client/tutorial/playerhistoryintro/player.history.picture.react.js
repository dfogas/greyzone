import './player.history.picture.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
// import $ from 'jquery';

class PlayerHistorySlidePicture extends Component {
  render() {
    const {slideNo, tutorial} = this.props;
    const imgsrc = tutorial.getIn(['playerhistory', 'slides', slideNo, 'imgsrc']);
    return (
      <div
        className='player-history-slide-picture'
        style={{
          backgroundImage: `url('../../../../${imgsrc}')`,
          backgroundSize: `100% 100%`,
          backgroundRepeat: `no-repeat`
        }}>
      </div>
    );
  }
}

PlayerHistorySlidePicture.propTypes = {
  slideNo: React.PropTypes.number,
  tutorial: React.PropTypes.instanceOf(immutable.Map)
};

export default PlayerHistorySlidePicture;
