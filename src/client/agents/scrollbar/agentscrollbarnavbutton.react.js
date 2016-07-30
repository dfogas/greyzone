/* DumbComponent */
import './agentscrollbarnavbutton.styl';
import Component from '../../components/component.react.js';
import React from 'react';
import classnames from 'classnames'; //

class AgentScrollBarNavButton extends Component {
  forward() {
    this.props.parentCallback();
  }

  render() {
    const {agents, isMission, style} = this.props;
    const orientation = this.props.data.orientation;
    const classString = classnames('agent-scroll-bar-nav-button', orientation, {
      'briefing': this.props.isBriefing,
      'on-mission': this.props.isMission
    });
    // console.log((agents.size - 3) * -264);

    // opacity setting
    const navStyle = function(pointing, isM) {
      if (isM) return {opacity: 1};
      else return pointing === 'left' ? (style.get('left') === 0 ? {opacity: 0} : {opacity: 1}) : (style.get('left') > ((agents.size - 3) * -264) ? {opacity: 1} : {opacity: 0});
    };

    return (
      <div
        className={classString}
        onClick={this.forward.bind(this)}
        style={navStyle(orientation, isMission)}
      >
      </div>
    );
  }
}

AgentScrollBarNavButton.propTypes = {
  data: React.PropTypes.object,
  isBriefing: React.PropTypes.bool,
  isMission: React.PropTypes.bool,
  parentCallback: React.PropTypes.func
};

export default AgentScrollBarNavButton;
