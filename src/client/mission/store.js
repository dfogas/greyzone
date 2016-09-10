import * as missionActions from './actions';
import * as briefingActions from '../briefing/actions';
import {jsonapiCursor} from '../state';
import {register} from '../dispatcher';
import immutable from 'immutable';
import defaultActiveMission from '../../server/lib/greyzone/missions/default/defaultactivemission';
import dayandtime from '../lib/dayandtime';
import bookAttention from '../lib/bml/bookattention';
import bookObscurity from '../lib/bml/bookobscurity';
import bookReputation from '../lib/bml/bookreputation';

export const dispatchToken = register(({action, data}) => {

  if (action === missionActions.agentFreed) {
    data = data.agent;
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('agents', val => val.unshift(data.set('prison', false)))
        .update('log', val => val.unshift(
          dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - Agent ' + data.get('name') + ' was freed from prison .'
        ))
        .set('agentbeingsaved', null);
    });
  }

  if (action === missionActions.agentImprisoned)
    jsonapiCursor(jsonapi => {
      return jsonapi
      .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'prison'], true)
      .update('log', val => val.unshift(
        dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - Agent ' + data.agent.get('name') + ' was caught and imprisoned.'
      ));
    });

  if (action === missionActions.agentKilled)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'KIA'], true)
        .update('log', val => val.unshift(
          dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - Agent ' + data.agent.get('name') + ' was killed in action.'
      ));
    });

  if (action === missionActions.agentIsBackFromTask) {
    const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['activemission', 'agentsonmission'], val => val.push(agentontask)) // agents return to command center
        .setIn(['activemission', 'mission', 'currenttask', 'agentontask'], null);
    });
  }

  if (action === missionActions.agentLockedToTask)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'agentlock'], true);
    });

  if (action === missionActions.agentLoyalty) {
    const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    const agentBecominLoyal = agentsonmission.find(agent => agent.get('loyalty') === 'normal');
    jsonapiCursor(jsonapi => {
      return jsonapi
      .updateIn(['activemission', 'agentsonmission', agentsonmission.indexOf(agentBecominLoyal)], val => val.set('loyalty', 'loyal'));
    });
  }

  if (action === missionActions.agentMissionDone) {
    const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    if (jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .updateIn(['activemission', 'mission', 'currenttask', 'agentontask', 'missionsDone'], val => val.push(data.message));
      });
    else
      jsonapiCursor(jsonapi => {
        return jsonapi
          .updateIn(['activemission', 'agentsonmission', agentsonmission.indexOf(data.agent), 'missionsDone'], val => val.push(data.message));
      });
  }

  if (action === missionActions.agentOnTaskGetsExperienceForCompletingTask)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['activemission', 'mission', 'currenttask', 'agentontask', 'experience'],
          // přidej mu zkušenost, gah
          val => val + 15);
    });

  if (action === missionActions.agentsAreBackFromMission) {
    const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('agents', val => val.concat(agentsonmission))
        .setIn(['activemission', 'agentsonmission'], immutable.fromJS(Array(0)));
    });
  }

  if (action === missionActions.agentRecruited)
    jsonapiCursor(jsonapi => {
      return jsonapi.update('agents', val => val.push(immutable.fromJS(data)));
    });

  if (action === missionActions.attentionLowered) {
    const inCountry = data.country || 'US';
    const indexOfCAL = jsonapiCursor(['events']).indexOf(jsonapiCursor(['events']).find(gaev => gaev.get('tag') === 'attention' && gaev.get('country') === inCountry));
    const countryAL = jsonapiCursor(['events', indexOfCAL, 'level']);

    jsonapiCursor(jsonapi => {
      return jsonapi.setIn(['events', indexOfCAL, 'level'], bookAttention(countryAL, 'down'));
    });
  }

  if (action === missionActions.bookCash)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('gameCash', val => val + data.amount);
    });

  if (action === missionActions.bookContacts)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('gameContacts', val => val + data.amount);
    });

  if (action === missionActions.bookLosses || action === briefingActions.bookLosses) {
    const results = data.mission.get('losses') ? data.mission.get('losses').toJS() : {};
    const countrystats = jsonapiCursor(['countrystats']);
    const missioncountryname = data.mission.get('inCountry');
    const countryindex = countrystats.indexOf(countrystats.find(country => country.get('name') === missioncountryname));

    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['gameCash'], val => results.gameCash ? val - results.gameCash : val)
        .updateIn(['gameContacts'], val => results.gameContacts ? val - results.gameContacts : val)
        .updateIn(['countrystats', countryindex, 'obscurity'], val => results.obscurity ? bookObscurity(val, -results.obscurity) : val)
        .updateIn(['countrystats', countryindex, 'reputation'], val => results.reputation ? val - results.reputation : val);
    });
  }

  if (action === missionActions.bookObscurity)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['countrystats', data.countryindex, 'obscurity'], val => bookObscurity(val, data.obscurity));
    });

  if (action === missionActions.bookReputation)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['countrystats', data.countryindex, 'reputation'], val => bookReputation(val, data.reputation));
    });

  if (action === missionActions.bookRewards) {
    // TODO: this should be done in actions ...
    const results = data.mission.get('rewards') ? data.mission.get('rewards').toJS() : {};
    const countrystats = jsonapiCursor(['countrystats']);
    const missioncountryname = data.mission.get('inCountry');
    const countryindex = countrystats.indexOf(countrystats.find(country => country.get('name') === missioncountryname));
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['gameCash'], val => results.gameCash ? val + results.gameCash : val)
        .updateIn(['gameContacts'], val => results.gameContacts ? val + results.gameContacts : val)
        .updateIn(['countrystats', countryindex, 'reputation'], val => results.reputation ? val + results.reputation : val)
        .updateIn(['countrystats', countryindex, 'obscurity'], val => results.obscurity ? bookObscurity(val, results.obscurity) : val);
    });
  }

  if (action === briefingActions.checkFatalities) {
    const results = data.results;
    const agents = jsonapiCursor(['agents']);

    if (Object.keys(results).indexOf('agentImprisoned') !== -1)
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['agents', agents.indexOf(data.agentfatal), 'prison'], true)
          .setIn(['briefing', 'message'], 'Agent has been imprisoned, by mission that was a threat to you and went unnoticed by yourself.');
      });
    if (Object.keys(results).indexOf('agentKilled') !== -1)
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['agents', agents.indexOf(data.agentfatal), 'KIA'], true)
          .setIn(['briefing', 'message'], 'Agent has been killed, by mission that was a threat to you and went unnoticed by yourself.');
      });
  }

  if (action === missionActions.clearTabletop)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'actiondices'], immutable.fromJS(Array(0)))
        .setIn(['activemission', 'mission', 'currenttask', 'actiondices'], immutable.fromJS(Array(0)));
    });

  if (action === missionActions.clearTask) {
    const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
    const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'agentsonmission'], agentsonmission.push(agentontask))
        .setIn(['activemission', 'mission', 'currenttask', 'agentontask'], null)
        .setIn(['activemission', 'mission', 'currenttask', 'diceslock'], false)
        .setIn(['activemission', 'mission', 'currenttask', 'agentlock'], false);
    });
  }

  if (action === missionActions.completeTask)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['activemission', 'taskscompleted'], val => val.push(data.task));
    });

  if (action === missionActions.controldamage) {
    const results = data.mission.get('losses').toJS();
    const countrystats = jsonapiCursor(['countrystats']);
    const missioncountryname = data.mission.get('inCountry');
    const countryindex = countrystats.indexOf(countrystats.find(country => country.get('name') === missioncountryname));

    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['countrystats', countryindex, 'reputation'], val => results.reputation ? val - results.reputation : val)
        .update('log', val => val.unshift(
          dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - Mission ' + jsonapiCursor(['activemission', 'title']) + ' in ' + missioncountryname + ' failed, with limited damages.'
        ));
    });
  }

  if (action === missionActions.end)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'started'], true);
    });

  if (action === missionActions.fail) {
    const activemission = jsonapiCursor(['activemission']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'result'], 'fail')
        .update('log', val => val.unshift(
          dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - Mission ' + activemission.get('title') + ' in ' + activemission.get('inCountry') + ' failed.'
        ));
    });
  }

  if (action === missionActions.focusMission)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission'], immutable.fromJS(defaultActiveMission).mergeDeep(jsonapiCursor(['missions']).get(0)));
    });

  if (action === missionActions.log)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('log', val => val.unshift(data.message));
    });

  if (action === briefingActions.passMission)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('missions', val => val.delete(val.indexOf(data.message)));
    });


  if (action === missionActions.removeCompletedMission) {
    const activemission = jsonapiCursor(['activemission']);
    const missions = jsonapiCursor(['missions']);
    const completedmission = missions.indexOf(
      missions.find(mission =>
        mission.get('title') === activemission.get('title') &&
        mission.get('inCountry') === activemission.get('inCountry') &&
        mission.get('tier') === activemission.get('tier')
      )
    );
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['missions'], val => val.delete(completedmission));
    });
  }

  if (action === missionActions.setDefault)
    jsonapiCursor(jsonapi => {
      return jsonapi.set('activemission', immutable.fromJS(defaultActiveMission));
    });

  if (action === missionActions.start)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'started'], true);
    });

  if (action === missionActions.success) {
    const activemission = jsonapiCursor(['activemission']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'result'], 'success')
        .update('log', val => val.unshift(
          dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - Mission ' + activemission.get('title') + ' in ' + activemission.get('inCountry') + ' succeeded.'
        ));
    });
  }

});
