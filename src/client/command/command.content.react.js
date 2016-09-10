import './command.content.styl';
import Component from '../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import allAgents from '../lib/bml/allagents';
import dayandtime from '../lib/dayandtime';

import AgentToken from '../briefing/agent.token.react';
import GeminiScrollbar from 'react-gemini-scrollbar';

class MainScreen extends Component {
  render() {
    const {jsonapi} = this.props;
    const self = jsonapi.get('self');
    const playerAgentIsActive = allAgents(jsonapi).find(agent => agent.get('id') === self.get('id'));
    const agents = playerAgentIsActive ? allAgents(jsonapi) : allAgents(jsonapi).push(jsonapi.get('self'));
    return (
      <div className='command-content'>
        <GeminiScrollbar>
          {jsonapi.get('missionsDone').map(item => {
            return (
              <div className='org-mission-done'>
                <span>{dayandtime(item.get('timeDone'), new Date().getTimezoneOffset())}</span>
                <span>Mission {item.get('title')} in {item.get('inCountry')} was a {item.get('result')}</span>
                <div>
                  {item.get('agents').map(id => {
                    return (
                      <AgentToken
                        agent={agents.find(ag => ag.get('id') === id)}
                        />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </GeminiScrollbar>
      </div>
    );
  }
}

MainScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default MainScreen;
