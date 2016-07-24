/* ImmutableMap(Agent) ImmutableList(Task) -> ImmutableList(Dices) */
/* použito při assignování agenta k tasku */
/* TODO: přepsat na výstup do ImmutableList of dices */
/* BML: true */
import immutable from 'immutable';
import uuid from './guid';

function actionDices(agent, task) {
  let actiontypes = [];

  if (task)
    actiontypes = task.toSeq().map(action => action.get('type'), actiontypes).toList();

  let taskhasOperations = actiontypes.indexOf('operations');
  let taskhasElectronics = actiontypes.indexOf('electronics');
  let taskhasStealth = actiontypes.indexOf('stealth');
  let actdices = [];
  let i;

  if (taskhasOperations !== -1)
    for (i = 0; i < agent.get('operationsSkill'); i += 1)
      actdices.push({type: 'operations', name: 'fail', dicekey: uuid() + 'dice'});
  if (taskhasElectronics !== -1)
    for (i = 0; i < agent.get('electronicsSkill'); i += 1)
      actdices.push({type: 'electronics', name: 'fail', dicekey: uuid() + 'dice'});
  if (taskhasStealth !== -1)
    for (i = 0; i < agent.get('stealthSkill'); i += 1)
      actdices.push({type: 'stealth', name: 'fail', dicekey: uuid() + 'dice'});

  return immutable.fromJS(actdices);
}

export default actionDices;
