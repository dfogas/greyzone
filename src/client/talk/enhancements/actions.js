import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';
import {gameCursor, jsonapiCursor} from '../../state';
import announce from '../../lib/announce';

export function buyEnhancement(mystery) {
  const gameCash = jsonapiCursor(['gameCash']);
  const gameContacts = jsonapiCursor(['gameContacts']);
  const enhancements = jsonapiCursor(['enhancements']);
  const list = gameCursor(['globals', 'enhancements']);
  let enhancement;
  console.log(mystery); // eslint-disable-line no-console
  if (typeof mystery === 'string')
    enhancement = list.find(item => item.get('missiontag') === mystery);
  else enhancement = mystery;
  let price = enhancement.get('price');
  if (!enhancements.find(enh => enh.get('name') === 'Good Label') && enhancement.get('type') === 'operationsscope')
    announce(`Upgrade operations first`, `Talk`);
  else if (gameCash >= price.get('cash') && gameContacts >= price.get('contacts')) {
    dispatch(buyEnhancement, {enhancement});
    choiceToAcknowledgement();
  } else {
    announce(`Insufficient cash or contacts. Price is $10,000 and 100 contacts.`, `Talk`);
    closeEnhancementTalk();
  }
}

export function choiceToAcknowledgement() {
  dispatch(choiceToAcknowledgement, {});
}

export function closeEnhancementTalk() {
  dispatch(closeEnhancementTalk, {});
}

export function dialogToChoice() {
  dispatch(dialogToChoice, {});
}

export function facilityUpgradeDialog(enhancement) {
  const enhancements = jsonapiCursor(['enhancements']);
  if (enhancements.indexOf(enhancement) === -1)
    dispatch(facilityUpgradeDialog, {enhancement});
}

export function facilityUpgradeDialogClose(enhancement) {
  dispatch(facilityUpgradeDialogClose, {enhancement});
}

export function operationsUpgradeDialogToggle() {
  dispatch(operationsUpgradeDialogToggle, {});
}

export function trainingUpgradeDialogToggle() {
  dispatch(trainingUpgradeDialogToggle, {});
}

setToString('talk', {
  buyEnhancement,
  choiceToAcknowledgement,
  closeEnhancementTalk,
  dialogToChoice,
  facilityUpgradeDialog,
  facilityUpgradeDialogClose,
  operationsUpgradeDialogToggle,
  trainingUpgradeDialogToggle
});
