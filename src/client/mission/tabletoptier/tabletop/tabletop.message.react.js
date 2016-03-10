import './tabletop.message.styl';
import Component from '../../../components/component.react';
import React from 'react';

class TabletopMessage extends Component {
  render() {
    const {missionlog} = this.props;
    return (
      <div id="TabletopMessage">
        {missionlog || `Message for player on the mission`}
      </div>
    );
  }
}

TabletopMessage.propTypes = {
  missionlog: React.PropTypes.string
};

export default TabletopMessage;
