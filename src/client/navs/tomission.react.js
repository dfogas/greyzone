import './tomission.styl';
import * as missionsActions from '../mission/actions';
import * as scrollbarActions from '../agents/scrollbar/actions';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';
import immutable from 'immutable';

class ToMission extends Component {
  redirectAndStartMission() {
    const {jsonapi} = this.props;
    if (jsonapi.getIn(['activemission', 'inCountry']) === jsonapi.getIn(['dashboard', 'countryofoperation'])) {
      missionsActions.start();
      scrollbarActions.normalizeScrollbarLeft('mission');
    }
  }

  render() {
    return (
      <Link to='dashboard'>
        <button
          className='ingame-nav-button'
          id='ToMissionNavButton'
          onClick={this.redirectAndStartMission.bind(this)}>
          {msg('menu.mission')}
        </button>
      </Link>
    );
  }
}

ToMission.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};


export default ToMission;
