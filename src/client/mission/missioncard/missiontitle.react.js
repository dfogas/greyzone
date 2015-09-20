import * as actions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class MissionTitle extends Component {
  select() {
    const {mission} = this.props;

    actions.select(mission);
  }

  render() {
    let {title} = this.props;
    // if(!activemission || !activemission.title) {
    //   activemission = {};
    //   activemission.title = "New Default Title";
    // }
    // console.log(activemission);

    // const isActualMission = !!this.props.isActual;

    var classString = '';
    if (this.props.isActual)
      classString += ' actual';
    if (this.props.isBriefing)
      classString += ' briefing';
    if (this.props.isSpecial)
      classString += ' special';
    return (
      <div className={'mission-title' + classString} onClick={this.select.bind(this)}>
        {title}
      </div>
    );
  }
}

MissionTitle.propTypes = {
  isActual: React.PropTypes.bool,
  isBriefing: React.PropTypes.bool,
  isSpecial: React.PropTypes.bool,
  mission: React.PropTypes.instanceOf(immutable.Map),
  title: React.PropTypes.string
};

export default MissionTitle;
