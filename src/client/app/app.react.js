/*
  Smart component
*/
import './app.styl';
import * as state from '../state';
import Component from '../components/component.react';
import React from 'react';
import {RouteHandler} from 'react-router';
import {measureRender} from '../console';
import 'isomorphic-fetch';

// import Footer from './footer.react';
import Menu from './menu.react';

// Remember to import all app stores here.
import '../intl/store';
import '../agents/store';
import '../agents/scrollbar/store';
import '../auth/store';
import '../dashboard/store';
import '../mission/tabletoptier/dice/store';
import '../equipments/store';
import '../mission/store';
import '../users/store';
import '../support/store';

//libs
import '../lib/decimalrounding';
import '../lib/formatmoney';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.getState();
  }

  pollStateToPersistance() {
    const api = process.env.NODE_ENV === 'production' ?
      'http://fierce-shore-7346.herokuapp.com/api/v1/' :
      'http://localhost:8000/api/v1/';
    const playerId = this.state.jsonapi.get('_id');
    const jsonapi = this.state.jsonapi.toJS();
    if (this.state.jsonapi.get('name') !== 'Default')
      fetch(api + 'players/' + playerId, {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(jsonapi)
      });
  }

  getState() {
    return {
      auth: state.authCursor(),
      contest: state.contestCursor(),
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
        <Menu
          locales={this.state.i18n.get('locales')}
          {...this.state}
          />
        <RouteHandler {...this.state} />
        {/*<Footer />*/}
      </div>
    );
  }

}

export default App;
