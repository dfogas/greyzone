/*
  Smart component
  Recieves state and state changes via stores
*/
import './app.styl';
import '../navs/navs.styl';
import './animations.styl';
// import config from '../../server/config'; //I think that this breaks the app
// import cconfig from '../client.config';
import * as state from '../state';
import pollingStateToPersistence from '../lib/pollingstate';
import Component from '../components/component.react';
import React from 'react';
import {RouteHandler} from 'react-router';
import {measureRender} from '../console';

// Remember to import all app stores here.
import '../intl/store';
import '../agents/store';
import '../agents/scrollbar/store';
import '../animations/store';
import '../app/feedbackform/store';
import '../auth/store';
import '../briefing/store';
import '../briefing/travelwindow/store';
import '../command/store';
import '../components/store';
import '../dashboard/endgame/store';
import '../dashboard/logwindow/store';
import '../dashboard/optionswindow/store';
import '../dashboard/statuseswindow/store';
import '../dashboard/store';
import '../equipments/store';
import '../events/store';
import '../introduction/store';
import '../mission/store';
import '../mission/tabletoptier/dice/store';
import '../mission/tabletoptier/rotatingdie/store';
import '../talk/enhancements/store';
import '../talk/store';
import '../tutorial/firstmission/store';
import '../tutorial/store';
import '../users/store';

//libs
import 'isomorphic-fetch';
import '../lib/general/decimalrounding';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.getState();
  }

  pollStateToPersistance() {
    pollingStateToPersistence(this.state.jsonapi, process.env.NODE_ENV);
  }

  getState() {
    return {
      about: state.aboutCursor(),
      auth: state.authCursor(),
      contest: state.contestCursor(),
      game: state.gameCursor(),
      i18n: state.i18nCursor(),
      jsonapi: state.jsonapiCursor(),
      pendingActions: state.pendingActionsCursor(),
      posts: state.postsCursor(),
      support: state.supportCursor(),
      users: state.usersCursor(),
      viewer: state.usersCursor().get('viewer')
    };
  }

  // Why componentWillMount instead of componentDidMount.
  // https://github.com/steida/este/issues/274
  componentWillMount() {
    if (!process.env.IS_BROWSER) return;
    state.appState.on('change', () => {
      measureRender(done => this.setState(this.getState(), done));
    });
    setInterval(this.pollStateToPersistance.bind(this), 10000);
  }

  render() {
    React.initializeTouchEvents(true);

    return (
      <div className="page">
        <RouteHandler {...this.state} />
      </div>
    );
  }

}

export default App;
