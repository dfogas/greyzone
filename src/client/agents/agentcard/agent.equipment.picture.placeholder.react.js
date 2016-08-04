import './agent.equipment.picture.placeholder.styl';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import classnames from 'classnames';

class AgentEquipmentPicturePlaceholder extends Component {
  render() {
    const {agentequipment} = this.props;
    const classString = classnames('agent-equipment-picture-placeholder',
      immutable.Map.isMap(agentequipment) ? agentequipment.get('name').replace(/\s+/g, '') : '', {
        'mission': this.props.isMission,
        'showcased': this.props.isShowcased
      });
    return (
      <div className={classString}></div>
    );
  }
}

AgentEquipmentPicturePlaceholder.propTypes = {
  agentequipment: React.PropTypes.instanceOf(immutable.Map),
  isMission: React.PropTypes.bool,
  isShowcased: React.PropTypes.bool
};

export default AgentEquipmentPicturePlaceholder;
