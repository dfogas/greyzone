import {Record} from 'immutable';

const PostRecord = Record({
  id: '',
  text: ''
});

export default class Post extends PostRecord {
  // And here we can add own getters.
  // e.g. :
  // get titleLowerCase() {
  //   return this.title.toLowerCase();
  // }
}
