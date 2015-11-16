import './supportscreen.styl';
import Component from '../components/component.react';
import immutable from 'immutable';
import React from 'react';

import NewPost from './newpost.react';
import PostsList from './list.react';

class SupportScreen extends Component {
  render() {
    const {posts} = this.props;
    return (
      <div id='SupportScreen'>
        <PostsList posts={posts} />
        <NewPost post={posts.get('newPost')} />
      </div>
    );
  }
}

SupportScreen.propTypes = {
  posts: React.PropTypes.instanceOf(immutable.List)
};

export default SupportScreen;
