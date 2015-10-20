import './actions.styl';
import Component from '../../components/component.react';
import React from 'react';

import uuid from '../../lib/guid';

class Action extends Component {
  render() {
    let {action} = this.props;
    // console.log('Action is immutable:', immutable.Map.isMap(this.props.action));
    let type;
    if (action)
      type = action.get('type');

    var classString = '';
    if (!this.props.action) {
      action = {
        name: '',
        type: '',
        imgsrc: 'empty.jpg'
      };
      classString += ' ' + action.imgsrc.substr(0, 5);
    }
    if (this.props.isActual)
      classString += ' actual';
    if (this.props.action)
      classString += ' ' + action.get('imgsrc').substr(0, action.get('imgsrc').length - 4);
    if (this.props.isBriefing)
      classString += ' briefing';
    if (this.props.isMission)
      classString += ' mission';
    if (this.props.isSpecial)
      classString += ' special';
    if (type)
      classString += ' ' + type;

    const key = uuid();

    return (
      <li
        className={'action' + classString}
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
  isSpecial: React.PropTypes.bool
};

export default Action;
