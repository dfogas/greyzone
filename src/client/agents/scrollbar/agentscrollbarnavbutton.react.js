import * as scrollbarActions from './actions';
import Component from '../../components/component.react.js';
import immutable from 'immutable';
import React from 'react';

class AgentScrollBarNavButton extends Component {
  scrollleft() {
    scrollbarActions.scrollLeft();
  }

  scrollright() {
    scrollbarActions.scrollRight();
  }

  render() {
    const {pendingActions} = this.props;
    var orientation = this.props.data.orientation;
    return (
      <div
        className='agent-scroll-bar-nav-button'
        onClick={orientation === 'left' ? this.scrollleft : this.scrollright}
      >
        <img src = {'../../assets/img/buttons/navigation-' + orientation + '-button.png'} />
      </div>
    );
  }
}

AgentScrollBarNavButton.propTypes = {
  data: React.PropTypes.object,
  pendingActions: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentScrollBarNavButton;
