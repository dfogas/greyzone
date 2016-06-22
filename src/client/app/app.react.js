/*
  Smart component
  Recieves state and state changes via stores
*/
import './app.styl';
import '../navs/navs.styl';
// import config from '../../server/config'; //I think that this breaks the app
import cconfig from '../client.config';
import * as state from '../state';
import Component from '../components/component.react';
import React from 'react';
import {RouteHandler} from 'react-router';
import {measureRender} from '../console';
import 'isomorphic-fetch';

// import Footer from './footer.react';
// import Menu from './menu.react';
import BackgroundMusic from './background.music.react';

// Remember to import all app stores here.
import '../intl/store';
import '../agents/store';
import '../agents/scrollbar/store';
import '../auth/store';
import '../briefing/store';
import '../components/store';
import '../dashboard/logwindow/store';
import '../dashboard/optionswindow/store';
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
    // TODO: if polling then
    // 1st stage - poll only if changes
    // 2nd stage - poll only changes
    // 3rd stage - possibly completely replace w/ websockets
    const api = process.env.NODE_ENV === 'production' ?
      cconfig.dnsprod + '/api/v1/' :
      cconfig.dnsdevel + '/api/v1/';
    const userId = this.state.jsonapi.get('_id');
    const jsonapi = this.state.jsonapi.toJS();
    if (this.state.jsonapi.get('name') !== 'Default') {
      console.log('polling to persistance');
      fetch(api + 'players/' + userId, {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(jsonapi)
      });
    }
      // .then((response) => {
      //   console.log(response);
      // });
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
        <BackgroundMusic />
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
