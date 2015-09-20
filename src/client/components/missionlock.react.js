import Component from './component.react';
import React from 'react';
import {jsonapiCursor} from '../state';

export default function missionLock(BaseComponent) {

  class MissionLock extends Component {

    static willTransitionTo(transition) {
      const isMissionLocked = jsonapiCursor(['activemission', 'started']);
      if (!isMissionLocked) return;
      transition.redirect('/mission');
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  MissionLock.displayName = `${BaseComponent.name}MissionLock`;

  return MissionLock;

}
