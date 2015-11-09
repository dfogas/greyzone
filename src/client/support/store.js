import * as postsActions from './actions';
import Post from './post';
import {register} from '../dispatcher';
import {postsCursor} from '../state';
import {getRandomString} from '../lib/getrandomstring';

export const dispatchToken = register(({action, data}) => {
  if (action === postsActions.addPost)
    postsCursor(posts => {
      return posts
        .update('list', (list) => {
          const newPost = data;
          return list.push(newPost);
        })
        .set('newPost', new Post);
    });

  if (action === postsActions.onNewPostFieldChange)
    postsCursor(posts => {
      const {name, value} = data;
      return posts.setIn(['newPost', name], value);
    });
});
