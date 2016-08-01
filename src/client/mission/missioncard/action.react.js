import './action.styl';
import Component from '../../components/component.react';
import React from 'react';
import classnames from 'classnames';
import immutable from 'immutable';

class Action extends Component {
  render() {
    let {action, key} = this.props;

    const classString = classnames('action', action.get('imgsrc').substr(0, action.get('imgsrc').length - 4), action.get('type'), {
        'actual': this.props.isActual,
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
  action: React.PropTypes.instanceOf(immutable.Map).isRequired,
  isActual: React.PropTypes.bool,
  isMission: React.PropTypes.bool,
  key: React.PropTypes.string
};

export default Action;
