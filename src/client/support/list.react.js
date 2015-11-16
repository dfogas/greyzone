import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

import Post from './post.react';

class PostsList extends Component {

  render() {
    const {posts} = this.props;
    const postslist = posts.get('list');
    return (
      <ul className='posts-list'>
        {postslist.map((post, i) => {
          return (
            <Post post={post} />
          );
        })}
      </ul>
    );
  }
}

PostsList.propTypes = {
  posts: React.PropTypes.instanceOf(immutable.List)
};

export default PostsList;
