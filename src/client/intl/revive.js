import {Map} from 'immutable';
import messages from '../messages';

export default function(value) {
  const locale = value.get('locale');
  return Map(value).set('messages', messages[locale]);
}
