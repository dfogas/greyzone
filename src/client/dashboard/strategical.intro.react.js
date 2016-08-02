import './strategical.intro.styl';
import * as dashboardActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';
import allAgents from '../lib/bml/allagents';

class StrategicalIntro extends Component {
  render() {
    const {jsonapi} = this.props;
    const miyako = allAgents(jsonapi).find(agent => agent.get('name') === 'Miyako');
    const sanya = allAgents(jsonapi).find(agent => agent.get('name') === 'Sanya');

    return (
      <div id='StrategicalIntro'>
        {sanya &&
          <div>{msg('dashboard.strategical.intro.sanya')}</div>}
        {sanya &&
          <img src={sanya.get('imgsrc')} />}
        {miyako &&
          <div>{msg('dashboard.strategical.intro.miyako')}</div>}
        {miyako &&
          <img src={miyako.get('imgsrc')} />}
        <button
          id='StrategicalIntroShownButton'
          onClick={(e) => dashboardActions.dashboardIntroToggle()}>I will be right back</button>
      </div>
    );
  }
}

StrategicalIntro.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default StrategicalIntro;
