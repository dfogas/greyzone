import './mission.thumbnail.styl';//
import * as briefingActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
// import {msg} from '../../intl/store';
// import immutable from 'immutable';

class MissionThumbnail extends Component {
  toggleShowMissionDescriptionText() {
    briefingActions.missionTextToggle();
  }

  render() {
    const {imgsrc, /*mission, */thumbnailtext} = this.props;
    return (
      <div
        id='ActualMissionThumbnail'
        onClick={this.toggleShowMissionDescriptionText}
        style={{backgroundImage: `url('../../../../assets/img/missions/thumbnails/${imgsrc}')`}}>
        {thumbnailtext &&
          <div id='MissionDescription'>mission.get('description')</div>}
      </div>
    );
  }
}

MissionThumbnail.propTypes = {
  imgsrc: React.PropTypes.string,
  // mission: React.PropTypes.instanceOf(immutable.Map),
  thumbnailtext: React.PropTypes.string
};

export default MissionThumbnail;
