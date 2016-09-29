import './a.big.screen.styl';
import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import $ from 'jquery';

class BigScreen extends Component {
  componentDidMount() {
    $(React.findDOMNode(this)).focus();
  }

  quickRead(e) {
    // if (e.keyCode === 13)
    //   $(React.findDOMNode(this))
    //     .hide(400, () => {
    //       componentsActions.bigScreenToggle();
    //     });
    if (e.keyCode === 13) {
      componentsActions.bigScreenZ(-1);
      $('#LoginFormFieldEmail').focus();
    }
  }

  render() {
    const {jsonapi} = this.props;
    const zIndex = jsonapi.getIn(['components', 'login', 'bigscreen', 'zIndex']) || 1;

    return (
      <div
        id='ABigScreenIntro'
        onClick={e => componentsActions.bigScreenZ(-1)}
        onKeyDown={e => this.quickRead(e)}
        onPress={e => componentsActions.bigScreenZ(-1)}
        style={{zIndex: zIndex}}
        tabIndex='1'>
        {zIndex !== -1 &&
          <div id='ABigScreenContinueMessage'>Press 'Enter' to continue</div>}
      </div>
    );
  }
}

BigScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default BigScreen;
