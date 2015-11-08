import './supportscreen.styl';
import Component from '../components/component.react';
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

export default SupportScreen;
