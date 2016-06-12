import './a.big.screen.styl';
import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import React from 'react';
import $ from 'jquery';

class BigScreen extends Component {
  componentDidMount() {
    $(React.findDOMNode(this)).focus();
  }

  quickRead(e) {
    if (e.keyCode === 13)
      $(React.findDOMNode(this))
        .hide(400, () => {
          componentsActions.bigScreenToggle();
          $('#LoginFormFieldEmail').focus();
        });
  }

  render() {
    return (
      <div
        id='ABigScreenIntro'
        onKeyDown={e => this.quickRead(e)}
        tabIndex='1'>
        <div id='ABigScreenContinueMessage'>Press 'Enter' to continue</div>
      </div>
    );
  }
}

export default BigScreen;
