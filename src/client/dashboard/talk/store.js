import {register} from '../../dispatcher';
import * as talkActions from './actions';
import {jsonapiCursor} from '../../state';
import dayandtime from '../../lib/dayandtime';

export const dispatchToken = register(({action, data}) => {

  if (action === talkActions.buyEnhancement)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('enhancements', val => val.push(data.enhancement))
        .update('gameCash', val => val - data.enhancement.get('price').get('cash'))
        .update('gameContacts', val => val - data.enhancement.get('price').get('contacts'))
        .update('log', val => val.unshift(
          dayandtime(Date.now(), new Date().getTimezoneOffset()) +
          ' - Enhancement ' + data.enhancement.get('name') + ' for your organization bought.'
        ));
    });

  if (action === talkActions.choiceToAcknowledgement)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'enhancementtalkindex'], 'acknowledgement');
    });

  if (action === talkActions.closeEnhancementTalk)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'enhancementtalk'], null);
    });

  if (action === talkActions.dialogToChoice)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'enhancementtalkindex'], 'choice');
    });

  if (action === talkActions.facilityUpgradeDialog)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'facilityUpgradeDialog'], data.enhancement.get('name'));
    });

  if (action === talkActions.facilityUpgradeDialogClose)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'facilityUpgradeDialog'], null);
    });

  if (action === talkActions.operationsUpgradeDialogToggle) {
    const toggle = jsonapiCursor(['dashboard', 'operationsUpgradeDialog']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'operationsUpgradeDialog'], !toggle);
    });
  }

  if (action === talkActions.trainingUpgradeDialogToggle) {
    const toggle = jsonapiCursor(['dashboard', 'trainingUpgradeDialog']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'trainingUpgradeDialog'], !toggle);
    });
  }

});
