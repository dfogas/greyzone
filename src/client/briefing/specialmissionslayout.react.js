import Component from '../components/component.react';
import React from 'react';
import MissionCard from '../mission/missioncard/missioncard.react';
import immutable from 'immutable';

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
