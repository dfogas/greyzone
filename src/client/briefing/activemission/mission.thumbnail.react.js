import './mission.thumbnail.styl';
import * as briefingActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import {msg} from '../../intl/store';

class MissionThumbnail extends Component {
  hideTasks(e) {
    e.preventDefault();
    e.target.style.opacity = 1;
  }

  toggleShowMissionDescriptionText() {
    briefingActions.missionTextToggle();
  }

  showTasks(e) {
    e.preventDefault();
    e.target.style.opacity = 0.5;
  }

  render() {
    const {imgsrc, missiontag, thumbnailtext} = this.props;
    return (
      <div
        id='ActualMissionThumbnail'
        onClick={this.toggleShowMissionDescriptionText}
        onMouseLeave={(e) => this.hideTasks(e)}
        onMouseOver={(e) => this.showTasks(e)}
        >
        <img src={'../../../../assets/img/missions/thumbnails/' + imgsrc} />
        {thumbnailtext &&
          <div id='MissionDescription'>{msg('mission.descriptions.' + missiontag)}</div>}
      </div>
    );
  }
}

MissionThumbnail.propTypes = {
  imgsrc: React.PropTypes.string
};

export default MissionThumbnail;
