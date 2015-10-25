import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import acceptcost from '../../lib/missionacceptcost';

import * as actions from '../actions';
import MissionCard from '../../mission/missioncard/missioncard.react';
import {list as MissionsList} from '../../lib/missions';
import randomint from '../../lib/getrandomint';

class MissionsWindow extends Component {
  acceptMission() {
    var randommissionindex = randomint(0, MissionsList.length);
    actions.acceptMission(immutable.fromJS(MissionsList[randommissionindex]));
  }

  confirmMissionAccept() {
    const {countries, missiontoaccept} = this.props;
    const countryofmission = missiontoaccept.get('inCountry');
    const [countryreputation, countryobscurity] = [
      countries.getIn([countries.indexOf(countries.find(country => country.get('name') === countryofmission)), 'reputation']),
      countries.getIn([countries.indexOf(countries.find(country => country.get('name') === countryofmission)), 'obscurity'])
    ];
    const cost = acceptcost(countryreputation, countryobscurity);
    console.log(cost);
    actions.confirmmissionaccept(missiontoaccept, cost);
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
        <input onClick={this.acceptMission} type='button' value='Mission Impossible' />
        <br />
        {!!missiontoaccept &&
          <MissionCard
            isBriefing={true}
            mission={missiontoaccept}
            />}
        {!!missiontoaccept &&
          cost[0] + '$ and ' + cost[1] + 'contacts'}
        <br />
        {!!missiontoaccept &&
          <input
            onClick={this.confirmMissionAccept.bind(this)}
            type='button'
            value='Confirm Mission Accept'
            />}
      </div>
    );
  }

}

MissionsWindow.propTypes = {
  missiontoaccept: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionsWindow;
