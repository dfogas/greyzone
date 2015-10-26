/*
  Smart component
*/
import './app.styl';
import * as state from '../state';
import Component from '../components/component.react';
import Footer from './footer.react';
import Menu from './menu.react';
import React from 'react';
import {RouteHandler} from 'react-router';
import {measureRender} from '../console';
import NavTab from './navtab.react';
import 'isomorphic-fetch';

// Remember to import all app stores here.
import '../agents/store';
import '../auth/store';
import '../dashboard/store';
import '../mission/tabletoptier/dice/store';
import '../equipments/store';
import '../mission/store';
import '../users/store';

// DnD funcionality
import {default as TouchBackend} from 'react-dnd-touch-backend';
import {DragDropContext} from 'react-dnd';

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
    console.log('Polling state to persistance for user', this.state.jsonapi.get('name'), 'id ', this.state.jsonapi.get('_id')); // eslint-disable-line no-console
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
      jsonapi: state.jsonapiCursor(),
      pendingActions: state.pendingActionsCursor(),
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
        <NavTab />
        <RouteHandler {...this.state} />
        {/*<Footer />*/}
      </div>
    );
  }

}

export default DragDropContext(TouchBackend)(App);
