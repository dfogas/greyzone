import Component from '../components/component.react';
import React from 'react';

class CommentForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.title.value);
    console.log(this.refs.text.value);
    this.refs.title.value = '';
    this.refs.text.value='';
    return;
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input
          id='PostInputTitle'
          placeholder='State what is your post about'
          ref='title'
          type='text'
          />
        <input
          id='PostInputText'
          placeholder='Describe the situation'
          ref='text'
          type='text'
          />
        <input
          id='PostButton'
          type='submit'
          value='Post Comment'
          />
      </form>
    );
  }
}

export default CommentForm;
