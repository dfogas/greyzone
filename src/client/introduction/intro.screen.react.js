import './intro.screen.styl';
import * as introActions from './actions';
import React from 'react';
import Component from '../components/component.react';
import {msg} from '../intl/store';
import {FormattedHTMLMessage} from 'react-intl';
import GameConcepts from '../local/en/concepts'; // TODO: through msg

class IntroScreen extends Component {
  viewConcept() {
    alert('Viewing Concept'); // eslint-disable-line no-alert
  }

  render() {
    return (
      <div id="IntroScreenWrapper">
        <div id='IntroSidebar'>
          <div>Game Concepts</div>
          {Object.keys(GameConcepts).map(gc => {
            return (
              <div
                className='game-concept-link'
                onClick={this.viewConcept}>{gc}</div>
            );
          })}
        </div>
        <div id="IntroScreen">
          <FormattedHTMLMessage message={msg('introduction.overviewHtml')} />
        </div>
      </div>
    );
  }
}


export default IntroScreen;
