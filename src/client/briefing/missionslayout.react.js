import Component from '../components/component.react';
import React from 'react';
import MissionCard from '../mission/missioncard/missioncard.react';
import immutable from 'immutable';

class MissionsLayout extends Component {
  render() {
    const {missions} = this.props;
    let isBriefing = false;

    if (this.props.isBriefing)
      isBriefing = true;

    return (
      <div id='MissionsLayout'>
        {missions.map(mission => {
          return (
            <MissionCard
              isBriefing={isBriefing}
              mission={immutable.fromJS(mission)}
            />
          );
        })}
      </div>
    );
  }
}

MissionsLayout.propTypes = {
  isBriefing: React.PropTypes.bool,
  missions: React.PropTypes.instanceOf(immutable.List)
};

export default MissionsLayout;
