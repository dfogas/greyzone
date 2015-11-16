import Post from './post';
import {Map} from 'immutable';

export default function(value) {
  return Map(value)
    .set('newPost', new Post(value.get('newTodo')))
    .set('list', value.get('list').map(post => new Post(post)));
}
