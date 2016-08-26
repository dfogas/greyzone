import './tutorial.screen.styl'; //
import * as tutorialActions from './actions';
import Component from '../components/component.react.js';
import React from 'react';
import {Link} from 'react-router';

import PlayerHistoryIntro from './playerhistoryintro/player.history.intro.react';
import PlayerAgentChoose from '../tutorial/choose.class.react';

class TutorialScreen extends Component {
  render() {
    const {game, jsonapi, tutorial} = this.props;
    return (
      <div id='TutorialScreen'>
        {jsonapi.get('self').get('name') === 'Default Self' &&
          <PlayerAgentChoose
            game={game}
            jsonapi={jsonapi}
            />}
        {(tutorial.getIn(['playerhistory', 'slides']).size > (tutorial.getIn(['playerhistory', 'slideNo']) || 0)) &&
          <PlayerHistoryIntro tutorial={tutorial} />}
        {!tutorial.get('completed') &&
          <button
            id='CompleteTutorialButton'
            onClick={(e) => tutorialActions.completeTutorial()}>Complete Tutorial</button>}
        {tutorial.get('completed') &&
          <Link to='dashboard'><button id='TutorialToDashboardButton'>To Dashboard</button></Link>}
      </div>
    );
  }
}

export default TutorialScreen;
