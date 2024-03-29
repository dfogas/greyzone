import './dashboard.content.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

import CollectionWindow from './collectionwindow/collection.window.react';
import ContestWindow from './contestwindow/contest.window.react';
import EnhancementsWindow from './enhancementswindow/enhancements.window.react';
import LogWindow from './logwindow/log.window.react';
import OptionsWindow from './optionswindow/options.window.react';
import StatusesWindow from './statuseswindow/statuses.window.react';
import StrategicalWindow from './strategicalwindow/strategical.window.react';

class DashboardContent extends Component {
  render() {
    const {contest, game, isLoggedIn, jsonapi} = this.props;
    const dashPointer = jsonapi.getIn(['components', 'dashboard', 'index']);
    return (
      <div id='DashboardContent'>
        {dashPointer === 'collection' && jsonapi.getIn(['campaigns', 'campaigns', 'collector', 'selected']) &&
          <CollectionWindow
            game={game}
            jsonapi={jsonapi} />}
        {dashPointer === 'strategical' &&
          <StrategicalWindow
            game={game}
            isLoggedIn={isLoggedIn}
            jsonapi={jsonapi}
            />}
        {dashPointer === 'log' &&
          <LogWindow
            log={jsonapi.get('log')}
            />}
        {dashPointer === 'options' &&
          <OptionsWindow
            jsonapi={jsonapi}
            options={jsonapi.get('options')}
            />}
        {dashPointer === 'contest' &&
          <ContestWindow
            contest={contest}
          />}
        {dashPointer === 'statuses' && jsonapi.getIn(['campaigns', 'campaigns', 'dolcevita']) &&
          <StatusesWindow
            dashboard={jsonapi.get('dashboard')}
            owned={jsonapi.get('statuses')}
            statuses={game.getIn(['globals', 'statuses'])}
          />}
        {(dashPointer === 'enhancements') &&
          <EnhancementsWindow
            enhancements={game.getIn(['globals', 'enhancements'])}
            owned={jsonapi.get('enhancements')}
            paying={jsonapi.get('paying')}
            />}
      </div>
    );
  }
}

DashboardContent.propTypes = {
  contest: React.PropTypes.instanceOf(immutable.List),
  game: React.PropTypes.instanceOf(immutable.Map),
  isLoggedIn: React.PropTypes.string,
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default DashboardContent;
