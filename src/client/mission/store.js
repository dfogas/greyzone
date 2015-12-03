import * as missionActions from './actions';
import {jsonapiCursor} from '../state';
import {register} from '../dispatcher';
import immutable from 'immutable';
import defaultActiveMission from '../lib/defaultactivemission';

export const dispatchToken = register(({action, data}) => {

  if (action === missionActions.start)
    jsonapiCursor(jsonapi => {
      return jsonapi.setIn(['activemission', 'started'], true);
    });

  if (action === missionActions.select) {
    const agents = jsonapiCursor(['agents']);
    const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['agents'], agents.concat(agentsonmission))
        .setIn(['activemission'], immutable.fromJS(defaultActiveMission).mergeDeep(data.message));
    });
  }

  // WORKS! - Do not touch!!
  if (action === missionActions.taskCompleted) {
    const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
    const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    const taskscompleted = jsonapiCursor(['activemission', 'taskscompleted']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'taskscompleted'], taskscompleted.push(data.message))
        .setIn(['activemission', 'mission', 'currenttask', 'remainingdices'], immutable.fromJS(Array(0)))
        .setIn(['activemission', 'mission', 'currenttask', 'dicesthrown'], immutable.fromJS(Array(0)))
        .setIn(['activemission', 'agentsonmission'], agentsonmission.push(agentontask))
        .updateIn(['activemission',
          'agentsonmission',
          agentsonmission.indexOf(agentsonmission.find(agentonmission => agentonmission.get('name') === agentontask.get('name'))),
          'experience'],
            val => val + 15)
        .setIn(['activemission', 'mission', 'currenttask', 'agentontask'], null)
        .setIn(['activemission', 'mission', 'currenttask', 'diceslock'], false);
    });
  }

  if (action === missionActions.controldamage) {
    const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
    const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    const agents = jsonapiCursor(['agents']);
    const results = jsonapiCursor(['activemission', 'losses']).toJS();
    const countries = jsonapiCursor(['countries']);
    const activemissioncountryname = jsonapiCursor(['activemission', 'inCountry']);

    const activemission = jsonapiCursor(['activemission']);
    const missions = jsonapiCursor(['missions']);
    const completedmission = missions.indexOf(missions.find(mission => mission.get('title') === activemission.get('title')));

    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['countries',
          countries.indexOf(countries.find(country => country.get('name') === activemissioncountryname)),
          'reputation'],
            val => results.reputation ? val - results.reputation : val)
        .setIn(['missions'], missions.remove(completedmission)) // set to default mission and clear mission from mission roster
        .setIn(['activemission'], immutable.fromJS(defaultActiveMission).mergeDeep(missions.get(0))) // and clear activemission as well
        .setIn(['agents'], agents.push(agentontask).concat(agentsonmission)) // agents return to command center
        .setIn(['activemission', 'mission', 'currenttask', 'agentontask'], null)
        .setIn(['activemission', 'started'], false);
    });
  }

  if (action === missionActions.fail) {
    const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
    const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    const activemissioncountryname = jsonapiCursor(['activemission', 'inCountry']);
    const results = jsonapiCursor(['activemission', 'losses']).toJS();
    const countries = jsonapiCursor(['countries']);

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
            val => results.reputation ? val - results.reputation : val)
        .setIn(['activemission', 'agentsonmission'], agentsonmission.push(agentontask))
        .setIn(['activemission', 'mission', 'currenttask', 'agentontask'], null)
        .setIn(['activemission', 'started'], false)
        .setIn(['activemission', 'result'], 'fail');
    });
  }

  if (action === missionActions.success) {
    const results = jsonapiCursor(['activemission', 'rewards']).toJS();
    const countries = jsonapiCursor(['countries']);
    const activemissioncountryname = jsonapiCursor(['activemission', 'inCountry']);

    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['gameCash'], val => results.gameCash ? val + results.gameCash : val)
        .updateIn(['gameContacts'], val => results.gameContacts ? val + results.gameContacts : val)
        .updateIn(['countries',
          countries.indexOf(countries.find(country => country.get('name') === activemissioncountryname)),
          'reputation'],
            val => results.reputation ? val + results.reputation : val)
        .updateIn(['countries',
          countries.indexOf(countries.find(country => country.get('name') === activemissioncountryname)),
          'obscurity'],
            val => results.obscurity ? val + results.obscurity : val)
        .setIn(['activemission', 'started'], false)
        .setIn(['activemission', 'result'], 'success');
    });
  }

  if (action === missionActions.end) {
    const agents = jsonapiCursor(['agents']);
    const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);

    const activemission = jsonapiCursor(['activemission']);
    const missions = jsonapiCursor(['missions']);
    const completedmission = missions.indexOf(missions.find(mission => mission.get('title') === activemission.get('title')));

    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['agents'], agents.concat(agentsonmission))
        .setIn(['missions'], missions.remove(completedmission))
        .setIn(['activemission'], immutable.fromJS(defaultActiveMission).mergeDeep(missions.get(0)));
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

  if (action === missionActions.test)
    console.log('test'); // eslint-disable-line no-console

});
