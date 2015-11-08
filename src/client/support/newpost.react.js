import * as postsActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';
import immutable from 'immutable';

class NewPost extends Component {

  addPostOnEnter(e) {
    if (e.key === 'Enter')
      postsActions.addPost(this.props.post);
  }

  render() {
    return(
      <input
        autoFocus
        className="new-post"
        name="text"
        onChange={postsActions.onNewPostFieldChange}
        onKeyDown={(e) => this.addPostOnEnter(e)}
        placeholder={msg('posts.newPostPlaceholder')}
        value={this.props.post.text}
        />
    );
  }
}

NewPost.propTypes = {
  post: React.PropTypes.instanceOf(immutable.Record)
};

export default NewPost;
