import './welcome.window.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';
import {FormattedHTMLMessage} from '../intl/store';
import $ from 'jquery';

class WelcomeWindow extends Component {
  readMessage() {
    // console.log('vžut');
    $(React.findDOMNode(this)).slideUp();
  }

  render() {
    return (
      <div
        id='WelcomeWindow'
        >
        <h1>Developers notice</h1>
        <h2>Ghost Struggle version Zero</h2>
        <p>
          This game is still before production.
          You can play it, but weird shit might happen, and also you might lose your game saves.
          Also game assets(pictures, texts and other) are too lacking yet.
          So play and enjoy the experience, but bear that in mind.
        </p>

        <p>
          <h2>Game Ends</h2>
          <ul>Bad Ends:
            <li>Given Up</li>
            <li>Betrayed</li>
            <li>Rich, But Not For Long</li>
          </ul>
          <ul>Good Ends:
            <li>Rich and Covered</li>
          </ul>
        </p>
        <p>
          Recommended is reading Gameplay/Introduction section of About/Help before starting of your game.
        </p>
        <h3>Disclaimer</h3>
        <p>
          Until further notice, I declare Ghost Struggle game a work of art, in order to avoid copyright infringment of used pictures etc.
          and I do not charge anything for it.
        </p>
        <p>
          <em>Warning: Game might include some depictions and hints of violence and/or suggestive scenes, so if that is something you are offended by then do not play it.</em>
        </p>
        {/*<FormattedHTMLMessage message={msg('developers.notice')} />*/}
        <button
          id='ReadDevelopersNoticeButton'
          onClick={this.readMessage.bind(this)}
          >{msg('developers.button')}</button>
      </div>
    );
  }
}

WelcomeWindow.propTypes = {

};

export default WelcomeWindow;
