import * as introActions from './actions';
import {aboutCursor} from '../state';
import {register} from '../dispatcher';

export const dispatchToken = register(({action, data}) => {

  if (action === introActions.viewGroup)
    aboutCursor(about => {
      return about
        .set('group', data.name)
        .set('item', 'introduction');
    });

  if (action === introActions.viewItem)
    aboutCursor(about => {
      return about
        .set('item', data.name);
    });

});
