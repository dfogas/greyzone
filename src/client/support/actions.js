import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import immutable from 'immutable';

export const MAX_POST_TEXT_LENGTH = 322;

export function addPost(post) {
  const text = post.text.trim();
  if (!text)
    return;
  dispatch(addPost, text);
}

export function onNewPostFieldChange({target: {name, value}}) {
  if (name === 'text')
    value = value.slice(0, MAX_POST_TEXT_LENGTH);
  dispatch(onNewPostFieldChange, {name, value});
}

setToString('posts', {
  addPost,
  onNewPostFieldChange
});