import './actions.styl';
import Component from '../../components/component.react';
import React from 'react';
import classnames from 'classnames';
import immutable from 'immutable';

class Action extends Component {
  render() {
    let {action, key} = this.props;
    let type;

    if (action)
      type = action.get('type');

    if (!this.props.action)
      action = immutable.fromJS({
        name: '',
        type: '',
        imgsrc: 'empty.jpg'
      });

    const classString = classnames(
      'action',
      action.get('imgsrc').substr(0, action.get('imgsrc').length - 4), type ? type : '',
      {
        'actual': this.props.isActual,
        'briefing': this.props.isBriefing,
        'mission': this.props.isMission
      });

    return (
      <li
        className={classString}
        key={key}
        />
    );
  }
}

Action.propTypes = {
  action: React.PropTypes.object,
  isActual: React.PropTypes.bool,
  isBriefing: React.PropTypes.bool,
  isMission: React.PropTypes.bool,
  isSpecial: React.PropTypes.bool,
  key: React.PropTypes.string
};

export default Action;
