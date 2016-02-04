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
        onMouseLeave={(e) => this.hideTasks(e)}
        onMouseOver={(e) => this.showTasks(e)}
        >
        <img src={'../../../../assets/img/missions/thumbnails/' + imgsrc} />
      </div>
    );
  }
}

MissionThumbnail.propTypes = {
  imgsrc: React.PropTypes.string
};

export default MissionThumbnail;
