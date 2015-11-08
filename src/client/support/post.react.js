import Component from '../components/component.react';
import React from 'react';

class Post extends Component {
  render() {
    const {post} = this.props;
    console.log('Post is: ' + post);
    return (
      <li>{post}<hr /></li>
    );
  }
}

export default Post;
