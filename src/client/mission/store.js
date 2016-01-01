import * as missionActions from './actions';
import {jsonapiCursor} from '../state';
import {register} from '../dispatcher';
import immutable from 'immutable';
import defaultActiveMission from '../lib/defaultactivemission';

export const dispatchToken = register(({action, data}) => {

  if (action === missionActions.agentIsBackFromTask) {
    const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
    const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);

    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'agentsonmission'], agentsonmission.push(agentontask)) // agents return to command center
        .setIn(['activemission', 'mission', 'currenttask', 'agentontask'], null);
    });
  }

  if (action === missionActions.agentLockedToTask)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'agentlock'], true);
    });

  if (action === missionActions.agentOnTaskGetsExperienceForCompletingTask)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['activemission', 'mission', 'currenttask', 'agentontask', 'experience'],
          // přidej mu zkušenost
          val => val + 15);
    });

  if (action === missionActions.agentsAreBackFromMission) {
    const agents = jsonapiCursor(['agents']);
    const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);

    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['agents'], agents.concat(agentsonmission));
    });
  }

  if (action === missionActions.bookLosses) {
    const activemissioncountryname = jsonapiCursor(['activemission', 'inCountry']);
    const results = jsonapiCursor(['activemission', 'losses']).toJS();
    const countries = jsonapiCursor(['countries']);

    /*
      books gameCash, gameContacts and reputation, obscurity when agents fail
    */
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['gameCash'], val => results.gameCash ? val - results.gameCash : val)
        .updateIn(['gameContacts'], val => results.gameContacts ? val - results.gameContacts : val)
        .updateIn(['countries',
          countries.indexOf(
            countries
              .find(country => country.get('name') === activemissioncountryname)),
                'obscurity'],
                  val => results.obscurity ? val - results.obscurity : val)
        .updateIn(['countries',
          countries.indexOf(countries.find(country => country.get('name') === activemissioncountryname)),
          'reputation'],
            val => results.reputation ? val - results.reputation : val);
    });
  }

  if (action === missionActions.bookRewards) {
    const results = jsonapiCursor(['activemission', 'rewards']).toJS();
    const countries = jsonapiCursor(['countries']);
    const activemissioncountryname = jsonapiCursor(['activemission', 'inCountry']);

    jsonapiCursor(jsonapi => {
      return jsonapi
        /*
          books gameCash, gameContacts and reputation, obscurity when agents succeeds
        */
        .updateIn(['gameCash'], val => results.gameCash ? val + results.gameCash : val)
        .updateIn(['gameContacts'], val => results.gameContacts ? val + results.gameContacts : val)
        .updateIn(['countries',
        countries.indexOf(countries.find(country => country.get('name') === activemissioncountryname)),
        'reputation'],
        val => results.reputation ? val + results.reputation : val)
        .updateIn(['countries',
        countries.indexOf(countries.find(country => country.get('name') === activemissioncountryname)),
        'obscurity'],
        val => results.obscurity ? val + results.obscurity : val);
    });
  }

  if (action === missionActions.checkFatalities) {
    const results = jsonapiCursor(['activemission', 'losses']).toJS();

    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'prison'],
          results.agentImprisoned ? true : false)
        .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'KIA'],
          results.agentKilled ? true : false);
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
    const countries = jsonapiCursor(['countries']);
    const activemissioncountryname = jsonapiCursor(['activemission', 'inCountry']);

    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['countries',
          countries.indexOf(countries.find(country => country.get('name') === activemissioncountryname)),
          'reputation'],
            val => results.reputation ? val - results.reputation : val);
    });
  }

  if (action === missionActions.focusMission)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission'], immutable.fromJS(defaultActiveMission).mergeDeep(jsonapiCursor(['missions']).get(0)));
    });

  if (action === missionActions.fail)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'started'], false)
        .setIn(['activemission', 'result'], 'fail');
    });

  if (action === missionActions.removeCompletedMission) {
    const activemission = jsonapiCursor(['activemission']);
    const missions = jsonapiCursor(['missions']);
    const completedmission = missions.indexOf(missions.find(mission => mission.get('title') === activemission.get('title')));

    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['missions'], missions.remove(completedmission));
    });
  }

  if (action === missionActions.select) {
    const agents = jsonapiCursor(['agents']);
    const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['agents'], agents.concat(agentsonmission))
        .setIn(['activemission'], immutable.fromJS(defaultActiveMission).mergeDeep(data.message));
    });
  }

  if (action === missionActions.start)
    jsonapiCursor(jsonapi => {
      return jsonapi.setIn(['activemission', 'started'], true);
    });

  if (action === missionActions.success)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'started'], false)
        .setIn(['activemission', 'result'], 'success');
    });

  //TO DO: fill in apropriate actions and events
  if (action === missionActions.updateAgentsMissionHistory) {
    const activemissioncountryname = jsonapiCursor(['activemission', 'inCountry']);
    const activemissiontitle = jsonapiCursor(['activemission', 'title']);
    const activemissionrecord = {title: activemissiontitle, inCountry: activemissioncountryname, success: false};

    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['activemission', 'agentsonmission'],
          val => val.get('missionsDone').toJS().push(activemissionrecord).fromJS());
    });
  }

});
