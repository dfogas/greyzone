import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import $ from 'jquery';

class MissionScreenDarkener extends Component {
  componentDidMount() {
    const {jsonapi} = this.props;
    if (jsonapi.getIn(['options', 'animations']))
      $(React.findDOMNode(this)).animate(
        {opacity: 0.7},
        1200,
        () => {componentsActions.missionScreenToggleOn(); });
    else componentsActions.missionScreenToggleOn();
  }

  componentWillUnmount() {
    const {jsonapi} = this.props;
    if (jsonapi.getIn(['options', 'animations']))
      componentsActions.missionScreenToggleOff();
  }

  render() {
    return (
      <div id="MissionScreenDarkener"></div>
    );
  }
}

MissionScreenDarkener.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionScreenDarkener;
