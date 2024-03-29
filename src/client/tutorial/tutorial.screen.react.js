import './tutorial.screen.styl'; //
import * as tutorialActions from './actions';
import Component from '../components/component.react.js';
import React from 'react';
import immutable from 'immutable';

import CurvedTailArrow from './curved.tail.arrow.react';
import PlayerHistoryIntro from './playerhistoryintro/player.history.intro.react';
import PlayerAgentChoose from '../tutorial/choose.class.react';

class TutorialScreen extends Component {
  completeTutorial(e) {
    e.preventDefault();
    tutorialActions.completeTutorial();
    window.history.back();
  }

  render() {
    const {game, jsonapi, tutorial} = this.props;
    const tutorialSlidesFinished = (tutorial.getIn(['playerhistory', 'slides']).size > (tutorial.getIn(['playerhistory', 'slideNo']) || 0));
    return (
      <div id='TutorialScreen'>
        <CurvedTailArrow />
        {!tutorial.get('avatarselected') && !tutorialSlidesFinished &&
          <PlayerAgentChoose
            game={game}
            jsonapi={jsonapi}
            />}
        {tutorialSlidesFinished &&
          <PlayerHistoryIntro tutorial={tutorial} />}
        {!tutorial.get('completed') &&
          <button
            id='CompleteTutorialButton'
            onClick={this.completeTutorial}>Complete Tutorial</button>}
      </div>
    );
  }
}

TutorialScreen.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  tutorial: React.PropTypes.instanceOf(immutable.Map)
};

export default TutorialScreen;
