/*
  Dumb Component
*/
import './missiontitle.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class MissionTitle extends Component {
  render() {
    let {title} = this.props;

    var classString = '';
    if (this.props.isActual)
      classString += ' actual';
    if (this.props.isBriefing)
      classString += ' briefing';
    if (this.props.isSpecial)
      classString += ' special';
    return (
      <div className={'mission-title' + classString}>
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
