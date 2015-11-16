import Component from '../components/component.react';
import React from 'react';

class Post extends Component {
  render() {
    const {post} = this.props;
    return (
      <li>{post}<hr /></li>
    );
  }
}

Post.propTypes = {
  post: React.PropTypes.string
};

export default Post;
