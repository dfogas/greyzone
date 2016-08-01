/*
  Dumb Component
*/
import './missiontitle.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import classnames from 'classnames';

class MissionTitle extends Component {
  render() {
    let {title} = this.props;

    const classString = classnames('mission-title', {
      'actual': this.props.isActual
    });

    return (
      <div className={classString}>
        {title}
      </div>
    );
  }
}

MissionTitle.propTypes = {
  isActual: React.PropTypes.bool,
  mission: React.PropTypes.instanceOf(immutable.Map),
  title: React.PropTypes.string
};

export default MissionTitle;
