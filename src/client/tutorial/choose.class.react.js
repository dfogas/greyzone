import './choose.class.styl';
import * as tutorialActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';
import formattedImg from '../lib/bml/formattedimg';

class AgentChoose extends Component {
  playerChooseAgent(e) {
    e.preventDefault();
    tutorialActions.playerChoseAgentClass(e.target.getAttribute('name'));
  }

  render() {
    const {/* game, */jsonapi} = this.props;
    const isDefault = jsonapi.getIn(['self', 'name']) === 'Default Self';
    return (
      <div id="PlayerChoosesAvatarsClass">
        <p>{msg('tutorial.chooseclass.question')}</p>
        <div
          className={jsonapi.getIn(['self', 'specialist']) === 'operative' ? 'active' : ''}
          id="ChooseOperative"
          name='operative'
          onClick={(e) => this.playerChooseAgent(e)}>
          Pursuits, Fights and Hits
          {!isDefault && jsonapi.getIn(['self', 'specialist']) === 'operative' &&
            <label>Operative</label>}
        </div>
        <div
          className={jsonapi.getIn(['self', 'specialist']) === 'technician' ? 'active' : ''}
          id="ChooseTechnician"
          name='technician'
          onClick={(e) => this.playerChooseAgent(e)}>
          Explosions, Wiring Stuff and Cracking Devices
          {!isDefault && jsonapi.getIn(['self', 'specialist']) === 'technician' &&
            <label>Technician</label>}
        </div>
        <div
          className={jsonapi.getIn(['self', 'specialist']) === 'spy' ? 'active' : ''}
          id="ChooseSpy"
          name='spy'
          onClick={(e) => this.playerChooseAgent(e)}>
          Manipulation of and Lying to People
          {!isDefault && jsonapi.getIn(['self', 'specialist']) === 'spy' &&
            <label>Spy</label>}
        </div>
        <div id='PlayerChoosesAvatarsClassMessage'>
          {isDefault ? `Choose Class of Player Agent Avatar` : `You have chosen ${jsonapi.getIn(['self', 'specialist'])}`}
        </div>
        <div id='PlayerChoosesAvatarAvatarPicture'>
          <img src={formattedImg(false, true, jsonapi.get('self'))} />
        </div>
        <button
          id='ConfirmPlayerAgentAvatarButton'
          onClick={(e) => tutorialActions.confirmAvatar()}>Confirm</button>
      </div>
    );
  }
}

AgentChoose.propTypes = {
  // game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentChoose;
