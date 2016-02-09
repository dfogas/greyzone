import * as missionActions from './actions';
import {jsonapiCursor} from '../state';
import {register} from '../dispatcher';
import immutable from 'immutable';
import defaultActiveMission from '../lib/defaultactivemission';
import dayandtime from '../lib/dayandtime';

export const dispatchToken = register(({action, data}) => {

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

  if (action === missionActions.agentMissionDone) {
    const activemission = jsonapiCursor(['activemission']);
    const missionDone = {
      title: activemission.get('title'),
      timeDone: Date.now(),
      tier: activemission.get('tier'),
      result: activemission.get('result'),
      organization: jsonapiCursor(['name']),
      inCountry: activemission.get('inCountry')
    };
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['activemission', 'agentsonmission', data.message, 'missionsDone'], val => val.push(immutable.fromJS(missionDone)));
    });
  }

  if (action === missionActions.agentOnTaskGetsExperienceForCompletingTask)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['activemission', 'mission', 'currenttask', 'agentontask', 'experience'],
          // přidej mu zkušenost
          val => val + 15);
    });

  if (action === missionActions.agentsAreBackFromMission) {
    const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('agents', val => val.concat(agentsonmission));
    });
  }

  if (action === missionActions.bookLosses) {
    const results = jsonapiCursor(['activemission', 'losses']).toJS();
    const countrystats = jsonapiCursor(['countrystats']);
    const activemissioncountryname = jsonapiCursor(['activemission', 'inCountry']);
    const countryindex = countrystats.indexOf(countrystats.find(country => country.get('name') === activemissioncountryname));

    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['gameCash'], val => results.gameCash ? val - results.gameCash : val)
        .updateIn(['gameContacts'], val => results.gameContacts ? val - results.gameContacts : val)
        .updateIn(['countrystats', countryindex, 'obscurity'], val => results.obscurity ? val - results.obscurity : val)
        .updateIn(['countrystats', countryindex, 'reputation'], val => results.reputation ? val - results.reputation : val)
        .update('log', val => val.push(
          'Losses booked.'
        ));
    });
  }

  if (action === missionActions.bookRewards) {
    const results = jsonapiCursor(['activemission', 'rewards']).toJS();
    const countrystats = jsonapiCursor(['countrystats']);
    const activemissioncountryname = jsonapiCursor(['activemission', 'inCountry']);
    const countryindex = countrystats.indexOf(countrystats.find(country => country.get('name') === activemissioncountryname));

    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['gameCash'], val => results.gameCash ? val + results.gameCash : val)
        .updateIn(['gameContacts'], val => results.gameContacts ? val + results.gameContacts : val)
        .updateIn(['countrystats', countryindex, 'reputation'], val => results.reputation ? val + results.reputation : val)
        .updateIn(['countrystats', countryindex,'obscurity'], val => results.obscurity ? val + results.obscurity : val)
        .update('log', val => val.push(
          'Rewards booked.'
        ));
    });
  }

  if (action === missionActions.checkFatalities) {
    const results = jsonapiCursor(['activemission', 'losses']).toJS();
    const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
    const activemission = jsonapiCursor(['activemission']);
    if (results.agentImprisoned)
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'prison'], true)
          .update('log', val => val.push(
            dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - Agent ' + agentontask.get('name') + ' was caught in ' + activemission.get('inCountry') + '.'
          ));
      });
    if (results.agentKilled)
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'KIA'], true)
          .update('log', val => val.push(
            dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - Agent ' + agentontask.get('name') + ' was killed in ' + activemission.get('inCountry') + '.'
          ));
      });
  }

  if (action === missionActions.clearTabletop)
    jsonapiCursor(jsonapi => {
      return jsonapi
      // obecně je zde duplicita v remaining dices a v dicesthrown, takový námět na refaktoring of state
      .setIn(['activemission', 'mission', 'currenttask', 'remainingdices'], immutable.fromJS(Array(0)))
      .setIn(['activemission', 'mission', 'currenttask', 'dicesthrown'], immutable.fromJS(Array(0)));
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
        .setIn(['activemission', 'taskscompleted'], jsonapiCursor(['activemission', 'taskscompleted']).push(data.message));
    });

  if (action === missionActions.controldamage) {
    const results = jsonapiCursor(['activemission', 'losses']).toJS();
    const countrystats = jsonapiCursor(['countrystats']);
    const activemissioncountryname = jsonapiCursor(['activemission', 'inCountry']);
    const countryindex = countrystats.indexOf(countrystats.find(country => country.get('name') === activemissioncountryname));

    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['countrystats', countryindex, 'reputation'], val => results.reputation ? val - results.reputation : val)
        .update('log', val => val.push(
          dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - Mission ' + activemission.get('title') + ' in ' + activemission('inCountry') + ' failed, with limited damages.'
        ));
    });
  }

  if (action === missionActions.fail) {
    const activemission = jsonapiCursor(['activemission']);
    jsonapiCursor(jsonapi => {
      return jsonapi
      .setIn(['activemission', 'started'], false)
      .setIn(['activemission', 'result'], 'fail')
      .update('log', val => val.push(
        dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - Mission ' + activemission.get('title') + ' in ' + activemission('inCountry') + ' failed.'
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
        .update('log', val => val.push(message));
    });

  if (action === missionActions.organizationMissionDone) {
    const activemission = jsonapiCursor(['activemission']);
    const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
    const agentsmissionall = agentontask ? agentsonmission.concat(agentontask) : agentsonmission;
    const missionDone = {
      title: activemission.get('title'),
      timeDone: Date.now(),
      tier: activemission.get('tier'),
      result: activemission.get('result'),
      inCountry: activemission.get('inCountry'),
      agents: agentsmissionall.toJS()
    };
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('missionsDone', val => val.push(immutable.fromJS(missionDone)));
    });
  }

  if (action === missionActions.passOnMission)
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
        mission.get('inCountry') === activemission.get('inCountry')
      )
    );
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['missions'], val => val.delete(completedmission));
    });
  }

  if (action === missionActions.select) {
    const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    if (data.message)
      jsonapiCursor(jsonapi => {
        return jsonapi
          .updateIn(['agents'], val => val.concat(agentsonmission))
          .setIn(['activemission'], immutable.fromJS(defaultActiveMission).mergeDeep(data.message));
      });
  }

  if (action === missionActions.start)
    jsonapiCursor(jsonapi => {
      return jsonapi.setIn(['activemission', 'started'], true);
    });

  if (action === missionActions.success) {
    const activemission = jsonapiCursor(['activemission']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'started'], false)
        .setIn(['activemission', 'result'], 'success')
        .update('log', val => val.push(
          dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - Mission ' + activemission.get('title') + ' in ' + activemission.get('inCountry') + ' succeeded.'
        ));
    });
  }

});
