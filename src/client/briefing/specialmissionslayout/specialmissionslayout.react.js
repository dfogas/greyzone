import './specialmissionslayout.css';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import MissionCard from '../../mission/missioncard/missioncard.react';

class SpecialMissionsLayout extends Component {
  render() {
    var {specialmissions} = this.props;

    return (
      <div id='SpecialMissionsLayout'>
        {specialmissions.map(specialmission => {
          return (
            <MissionCard
              isSpecial={true}
              mission={immutable.fromJS(specialmission)}
            />
          );
        })}
      </div>
    );
  }
}

SpecialMissionsLayout.propTypes = {
  specialmissions: React.PropTypes.instanceOf(immutable.List)
};

export default SpecialMissionsLayout;
