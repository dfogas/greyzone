import './options.window.styl';
import * as optionsActions from './actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import CampaignsActive from './campaigns.active.react';
import DashboardToIntro from '../../navs/dashboardtointro.react';
import DebugWindow from './debug.window.react';
import OptionsGameWindow from './options.game.window.react';
import PayingWindow from './paying.window.react';
import Pointer from '../pointer.react';

class OptionsWindow extends Component {
  changeOption(ev) {
    optionsActions.changeOption(ev.target.name, ev.target.checked);
  }

  render() {
    const {jsonapi, options} = this.props;
    const animations = options.get('animations');
    const debug = options.get('debug');
    const multiplayer = options.get('multiplayer');
    const soundeffects = options.get('soundeffects');
    const tutorial = options.get('tutorial');

    return (
      <div id='OptionsWindow'>
        <form className='options-form'>
          <fieldset>
            <legend>Options</legend>
            <label><input checked={multiplayer} name='multiplayer' onChange={(e) => this.changeOption(e)} type='checkbox' />Multiplayer</label>
            <label><input checked={tutorial} name='tutorial' onChange={(e) => this.changeOption(e)} type='checkbox' />Tutorial</label>
            {window.location.href === 'http://localhost:8000/' &&
              <label>
                <input
                  checked={debug}
                  name='debug'
                  onChange={(e) => this.changeOption(e)}
                  type='checkbox' />Debug Mode
              </label>}
            <label><input checked={animations} name='animations' onChange={(e) => this.changeOption(e)} type='checkbox' />Animations</label>
            <label><input checked={soundeffects} name='soundeffects' onChange={(e) => this.changeOption(e)} type='checkbox' />Sound Effects</label>
          </fieldset>
        </form>
        <CampaignsActive
          campaigns={jsonapi.getIn(['campaigns', 'campaigns'])}
          />
        <PayingWindow
          paying={jsonapi.get('paying')}
          />
        <DashboardToIntro />
        <Pointer pointsto='strategical' />
        {!multiplayer &&
          <OptionsGameWindow
            jsonapi={jsonapi}
            />}
        {debug &&
          <DebugWindow debug={debug} />}
      </div>
    );
  }
}

OptionsWindow.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  options: React.PropTypes.instanceOf(immutable.Map)
};

export default OptionsWindow;
