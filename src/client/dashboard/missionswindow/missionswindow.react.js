import './missionswindow.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import acceptcost from '../../lib/missionacceptcost';
import {msg} from '../../intl/store';

import MissionToAccept from './missiontoaccept.react';
import MissionResultList from '../../mission/missioncard/results/missionresultlist.react';

import {list as MissionsList} from '../../lib/missions';
import randomint from '../../lib/getrandomint';

class MissionsWindow extends Component {
  acceptMission() {
    var randommissionindex = randomint(0, MissionsList.length);
    dashboardActions.acceptMission(immutable.fromJS(MissionsList[randommissionindex]));
  }

  confirmMissionAccept() {
    const {countries, missiontoaccept} = this.props;
    const countryofmission = missiontoaccept.get('inCountry');
    const [countryreputation, countryobscurity] = [
      countries.getIn([countries.indexOf(countries.find(country => country.get('name') === countryofmission)), 'reputation']),
      countries.getIn([countries.indexOf(countries.find(country => country.get('name') === countryofmission)), 'obscurity'])
    ];
    const cost = acceptcost(countryreputation, countryobscurity);
    dashboardActions.confirmmissionaccept(missiontoaccept.toJS(), cost);
  }

  render() {
    const {countries, missiontoaccept} = this.props;
    let countryofmission, countryreputation, countryobscurity, cost;
    if (missiontoaccept) {
      countryofmission = missiontoaccept.get('inCountry');
      [countryreputation, countryobscurity] = [
        countries.getIn([countries.indexOf(countries.find(country => country.get('name') === countryofmission)), 'reputation']),
        countries.getIn([countries.indexOf(countries.find(country => country.get('name') === countryofmission)), 'obscurity'])
      ];
      cost = acceptcost(countryreputation, countryobscurity);
    }

    return (
      <div id='MissionsWindow'>
        <input
          onClick={this.acceptMission}
          type='button'
          value={msg('buttons.missionAccept')}
          />
        <br />
        <MissionToAccept
          missiontoaccept={missiontoaccept}
          />
        <br />
        <span>Rewards:</span><MissionResultList
          rewards={missiontoaccept ? missiontoaccept.get('rewards') : null}
          />
        <br />
        <span>Losses:</span><MissionResultList
          losses={missiontoaccept ? missiontoaccept.get('losses') : null}
          />
        <br />
        {!!missiontoaccept &&
          <div class='mission-accept-cost'>Acceptin this mission will cost you: {cost[0]}$ and {cost[1]} contacts</div>}
        <br />
        {!!missiontoaccept &&
          <input
            onClick={this.confirmMissionAccept.bind(this)}
            type='button'
            value={msg('buttons.confirmMission')}
            />}
      </div>
    );
  }

}

MissionsWindow.propTypes = {
  countries: React.PropTypes.instanceOf(immutable.List),
  missiontoaccept: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionsWindow;
