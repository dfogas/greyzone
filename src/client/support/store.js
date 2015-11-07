import * as postsActions from './actions';
import Post from './post';
import {register} from '../dispatcher';
import {postsCursor} from '../state';

export const dispatchToken = register(({action, data}) => {
  //TO DO: implement addPost

  if (action === postsActions.onNewPostFieldChange)
    postsCursor(posts => {
      const {name, value} = data;
      return posts.setIn(['newPost', name], value);
    });
});
