import './choose.class.styl';
import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';
import * as tutorialActions from './actions';

class AgentChoose extends Component {
  playerChooseAgent(e) {
    tutorialActions.playerChoseAgentClass(e.target.getAttribute('name'));
  }

  render() {
    // const {game, jsonapi} = this.props;
    return (
      <div id="PlayerChoosesAgentClass">
        <p>You have done special tasks in the past, what they were more like?</p>
        <div id="ChooseOperative" name='operative' onClick={(e) => this.playerChooseAgent(e)}>
          Pursuits, Fights and Hits
        </div>
        <div id="ChooseTechnician" name='technician' onClick={(e) => this.playerChooseAgent(e)}>
          Explosions, Wiring Stuff and Cracking Devices
        </div>
        <div id="ChooseSpy" name='spy' onClick={(e) => this.playerChooseAgent(e)}>
          Manipulation of and Lying to People
        </div>
      </div>
    );
  }
}

AgentChoose.propTypes = {};

export default AgentChoose;
