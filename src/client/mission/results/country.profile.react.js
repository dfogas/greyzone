import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import oQ from '../../lib/bml/obscurityquality';
import rQ from '../../lib/bml/reputationquality';

class MissionResultsCountryProfile extends Component {
  render() {
    const {jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    const eventsCI = jsonapi.get('events').indexOf(jsonapi.get('events').find(jsev => jsev.get('country') === activemission.get('inCountry')));
    return (
      <div id='MissionResultsCountryProfile'>
        {activemission.get('inCountry')}
        <br />
        {`Operations are ${oQ(jsonapi.get('countrystats').find(cs => (activemission.get('inCountry') || 'US') === cs.get('name')).get('obscurity'))}.`}
        {`Reputation is considered ${rQ(jsonapi.get('countrystats').find(cs => (activemission.get('inCountry') || 'US') === cs.get('name')).get('reputation'))}.`}
        {`Attention to your activities is ${jsonapi.getIn(['events', eventsCI, 'level'])}.`}
      </div>
    );
  }
}

MissionResultsCountryProfile.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionResultsCountryProfile;
