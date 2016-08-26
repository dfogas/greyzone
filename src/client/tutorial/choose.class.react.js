import './choose.class.styl';
import * as tutorialActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';

import CurvedTailArrow from './curved.tail.arrow.react';

class AgentChoose extends Component {
  playerChooseAgent(e) {
    tutorialActions.playerChoseAgentClass(e.target.getAttribute('name'));
  }

  render() {
    const {game, jsonapi} = this.props;
    return (
      <div id="PlayerChoosesAgentClass">
        <CurvedTailArrow />
        <p>{msg('tutorial.chooseclass.question')}</p>
        <div id="ChooseOperative" name='operative' onClick={(e) => this.playerChooseAgent(e)}>
          {msg('tutorial.chooseclass.operative')}
        </div>
        <div id="ChooseTechnician" name='technician' onClick={(e) => this.playerChooseAgent(e)}>
          {msg('tutorial.chooseclass.technician')}
        </div>
        <div id="ChooseSpy" name='spy' onClick={(e) => this.playerChooseAgent(e)}>
          {msg('tutorial.chooseclass.spy')}
        </div>
      </div>
    );
  }
}

AgentChoose.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentChoose;
