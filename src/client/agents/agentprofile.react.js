import Component from '../components/component.react.js';
import React from 'react';

class AgentProfile extends Component {
  render() {
    //data cache placeholder
    const {name} = this.props;

    var classString = '';
    var imgsrc = '../../assets/img/agents/agent_user_stock_spy_mail_help_hat_vehicle_vector_trustee-128.png';
    if (this.props.isShowcased)
      classString += ' showcased';
    return (
      <div className={'agent-profile' + classString}>
        <div className={'agent-picture' + classString}><img draggable="false" src={imgsrc} /></div>
        <div className={'agent-label' + classString}>{name}</div>
      </div>
    );
  }
}

AgentProfile.propTypes = {
  isShowcased: React.PropTypes.bool,
  name: React.PropTypes.string
};

export default AgentProfile;
