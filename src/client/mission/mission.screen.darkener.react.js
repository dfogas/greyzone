import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import React from 'react';
import $ from 'jquery';

class MissionScreenDarkener extends Component {
  componentDidMount() {
    $(React.findDOMNode(this)).animate(
      {opacity: 0.7},
      1000,
      () => {componentsActions.missionScreenTransition(); });
  }

  componentWillUnmount() {
    componentsActions.missionScreenTransition();
  }

  render() {
    return (
      <div id="MissionScreenDarkener"></div>
    );
  }
}

export default MissionScreenDarkener;
