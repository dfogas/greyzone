import Component from '../../components/component.react.js';
import React from 'react';
import classnames from 'classnames';
import immutable from 'immutable';

class AgentEquipmentPicturePlaceholder extends Component {
  render() {
    const {equipment} = this.props;
    const classString = classnames('agent-equipment-picture-placeholder', equipment.get('name').replace(/\s+/g, ''), {
      'on-mission': this.props.isMission,
      'showcased': this.props.isShowcased
    });
    return (
      <div
        className={classString}
        >
      </div>
    );
  }
}

AgentEquipmentPicturePlaceholder.propTypes = {
  equipment: React.PropTypes.instanceOf(immutable.Map),
  isMission: React.PropTypes.bool,
  isShowcased: React.PropTypes.bool
};

export default AgentEquipmentPicturePlaceholder;
