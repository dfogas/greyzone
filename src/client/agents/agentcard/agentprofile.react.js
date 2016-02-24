import Component from '../../components/component.react.js';
import React from 'react';

class AgentProfile extends Component {
  render() {
    //data cache placeholder
    const {name, imgsrc} = this.props;
    let formattedImg;
    var classString = '';

    formattedImg = imgsrc;
    if (this.props.isShowcased) {
      classString += ' showcased';
      formattedImg = imgsrc.replace("_128", '_sc');
    }
    return (
      <div className={'agent-profile' + classString}>
        <div className={'agent-picture' + classString}>
          <img draggable="false" src={formattedImg} />
          </div>
        <div className={'agent-label' + classString}>{name}</div>
      </div>
    );
  }
}

AgentProfile.propTypes = {
  imgsrc: React.PropTypes.string,
  isShowcased: React.PropTypes.bool,
  name: React.PropTypes.string
};

export default AgentProfile;
