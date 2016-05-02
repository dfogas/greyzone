import './agentondisplay.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

class AgentOnDisplay extends Component {
  render() {
    const {agentondisplay} = this.props;
    return (
      <div
        id='AgentOnDisplay'
        >
        <img src={'../../' + agentondisplay.get('imgsrc')} />
      </div>
    );
  }
}

AgentOnDisplay.propTypes = {
  agentondisplay: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentOnDisplay;
