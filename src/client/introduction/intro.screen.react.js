import './intro.screen.styl';
import * as introActions from './actions';
import React from 'react';
import Component from '../components/component.react';
import {msg} from '../intl/store';
import {FormattedHTMLMessage} from 'react-intl';
import capitalLetter from '../lib/capitalletter';

class IntroScreen extends Component {
  viewGroup(group) {
    introActions.viewGroup(group);
  }

  viewItem(item) {
    introActions.viewItem(item);
  }

  render() {
    const {about} = this.props;
    return (
      <div id="IntroScreenWrapper">
        <div id='IntroSidebar'>
          <div
            className='intro-links-group'
            onClick={e => this.viewGroup('concepts')}
            >Game Concepts
          </div>
          {about.get('group') === 'concepts' &&
            Object.keys(msg('concepts').toJS()).map(gc => {
              return (
                <div
                  className='game-concept-link'
                  onClick={(e) => this.viewItem(gc)}>{gc}</div>
              );
            })}
          <div
            className='intro-links-group'
            onClick={(e) => this.viewGroup('introduction')}
            >Introduction
          </div>
          {about.get('group') === 'introduction' &&
            Object.keys(msg('introduction').toJS()).map(intro => {
              return (
                <div
                  className='game-intro-link'
                  onClick={(e) => this.viewItem(intro)}>{intro}</div>
              );
            })}
          <div
            className='intro-links-group'
            onClick={(e) => this.viewGroup('help')}
            >Help
          </div>
          {about.get('group') === 'help' &&
            Object.keys(msg('help').toJS()).map(help => {
              return (
                <div
                  className='game-help-link'
                  onClick={(e) => this.viewItem(help)}>{help}</div>
              );
            })}
        </div>
        <div id="IntroScreen">
          <div
            id={'Intro' + capitalLetter(about.get('group')) + capitalLetter(about.get('item'))}
            >
            <FormattedHTMLMessage message={msg('' + about.get('group') + '.' + about.get('item'))} />
          </div>
        </div>
      </div>
    );
  }
}


export default IntroScreen;
