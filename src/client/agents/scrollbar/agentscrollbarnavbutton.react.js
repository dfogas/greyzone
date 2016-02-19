/*
  Smart Component
*/
import './agentscrollbarnavbutton.styl';
import * as scrollbarActions from './actions';
import Component from '../../components/component.react.js';
import React from 'react';
import classnames from 'classnames';

class AgentScrollBarNavButton extends Component {
  scrollleft() {
    const {isBriefing, isMission} = this.props;
    const context = isBriefing ? 'briefing' : 'mission';
    scrollbarActions.scrollLeft(context);
  }

  scrollright() {
    const {isBriefing, isMission} = this.props;
    const context = isBriefing ? 'briefing' : 'mission';
    scrollbarActions.scrollRight(context);
  }

  render() {
    const orientation = this.props.data.orientation;
    const classString = classnames('agent-scroll-bar-nav-button', orientation, {
      'briefing': this.props.isBriefing,
      'on-mission': this.props.isMission
    });

    return (
      <div
        className={classnames('agent-scroll-bar-nav-button ', orientation)}
        onClick={orientation === 'left' ? this.scrollleft.bind(this) : this.scrollright.bind(this)}
      >
      </div>
    );
  }
}

AgentScrollBarNavButton.propTypes = {
  data: React.PropTypes.object
};

export default AgentScrollBarNavButton;
