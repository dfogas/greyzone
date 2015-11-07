import './supportscreen.styl';
import Component from '../components/component.react';
import React from 'react';

import NewPost from './newpost.react';

class SupportScreen extends Component {
  render() {
    const {posts, support} = this.props;
    const initposts = support.get('posts');
    return (
      <div id='SupportScreen'>
        <ul id='PostsList'>Posts List
          {initposts.map((initpost) => {
            return (<li>{initpost}</li>);
          })}
        </ul>
        <NewPost post={posts.get('newPost')} />
      </div>
    );
  }
}

export default SupportScreen;
