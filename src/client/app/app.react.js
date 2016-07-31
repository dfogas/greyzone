/*
  Smart component
  Recieves state and state changes via stores
*/
import './app.styl';
import '../navs/navs.styl';
// import config from '../../server/config'; //I think that this breaks the app
// import cconfig from '../client.config';
import * as state from '../state';
import 'isomorphic-fetch';
// import '../lib/io';
import pollingStateToPersistence from '../lib/pollingstate';
import Component from '../components/component.react';
import React from 'react';
import {RouteHandler} from 'react-router';
import {measureRender} from '../console';

// import Footer from './footer.react';
// import Menu from './menu.react';

// Remember to import all app stores here.
import '../intl/store';
import '../agents/store';
import '../agents/scrollbar/store';
import '../auth/store';
import '../briefing/store';
import '../components/store';
import '../dashboard/endgame/store';
import '../dashboard/logwindow/store';
import '../dashboard/optionswindow/store';
import '../dashboard/statuseswindow/store';
import '../dashboard/talk/store';
import '../dashboard/store';
import '../introduction/store';
import '../mission/tabletoptier/dice/store';
import '../equipments/store';
import '../mission/store';
import '../users/store';
import '../support/store';
import '../tutorial/store';

//libs
import '../lib/decimalrounding';

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
        {/*<Menu viewer={this.state.viewer} />*/}
        {/*<Menu
          locales={this.state.i18n.get('locales')}
          {...this.state}
          />*/}
        <RouteHandler {...this.state} />
        {/*<Footer />*/}
      </div>
    );
  }

}

export default App;
