import './missionthumbnail.styl';
import Component from '../../components/component.react';
import React from 'react';

class MissionThumbnail extends Component {
  hideTasks(e) {
    e.preventDefault();
    e.target.style.opacity = 1;
  }

  showTasks(e) {
    e.preventDefault();
    e.target.style.opacity = 0.5;
  }

  render() {
    const {imgsrc} = this.props;
    return (
      <div
        id='ActualMissionThumbnail'
        onMouseOver={(e) => this.showTasks(e)}
        onMouseLeave={(e) => this.hideTasks(e)}
        >
        <img src={'../../../../assets/img/missions/thumbnails/' + imgsrc} />
      </div>
    );
  }
}

export default MissionThumbnail;
