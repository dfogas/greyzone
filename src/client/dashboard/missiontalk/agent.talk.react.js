import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import prop from '../../lib/general/r.i.prop';

class AgentTalk extends Component {
  render() {
    const {agent, talk} = this.props;

    return (
      <div className='agent-talk'>
        <img src={prop('imgsrc', agent)} />
        <div>{talk}</div>
      </div>
    );
  }
}

AgentTalk.propTypes = {
  agent: React.PropTypes.instanceOf(immutable.Map),
  talk: React.PropTypes.string
};

export default AgentTalk;
