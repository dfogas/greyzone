import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';

class AgentRankFour extends Component {
  render() {
    const {agentrankfour} = this.props;
    return (
      <div
        className={agentrankfour ? 'done' : ''}
        id='AgentRankFour'>
        {msg('tutorial.goals.agentrankfour')}
      </div>
    );
  }
}

AgentRankFour.propTypes = {
  agentrankfour: React.PropTypes.bool
};

export default AgentRankFour;
