/* Impure Function
  ImmutableMap(jsonapi) -> () + SideEffects
  používám zde $ ale možná bude lepší to nakonec řídit přes dashboard state
  klikání na ikonku agenta tak ale funguje i v Briefingu, Armory a také
  je ošetřen case pro Mission, nejde jen o Dashboard
  BML: true
*/
import agentTalk from './agenttalk';
import $ from 'jquery';
import {msg} from '../../intl/store';

function invokeAgentTalk(jsonapi, agent) {
  const self = jsonapi.get('self');

  if ($('#ArmoryScreen').html()) {
    $('#ArmoryScreen').append(() => msg('agents.talk.' + agentTalk(agent, self)));
    $('#AgentTalk').append(`<button>Close</button>`);
    $('#AgentTalk button').click(() => $('#AgentTalk').remove());
  } else if ($('#BriefingScreen').html()) {
    $('#BriefingScreen').append(msg('agents.talk.' + agentTalk(agent, self)));
    $('#AgentTalk').append(`<button>Close</button>`);
    $('#AgentTalk button').click(() => $('#AgentTalk').remove());
  } else if ($('#DashboardScreen').html()) {
    $('#DashboardScreen').append(msg('agents.talk.' + agentTalk(agent, self)));
    $('#AgentTalk').append(`<button>Close</button>`);
    $('#AgentTalk button').click(() => $('#AgentTalk').remove());
  } else {
    $('#TableTop').append('<div id=\'MissionStartMessage\'>Busy</div>');
    $('#MissionStartMessage').hide().fadeIn(200);
    $('#MissionStartMessage').fadeOut(1000, () => $('#MissionStartMessage').remove());
  }
}

export default invokeAgentTalk;
