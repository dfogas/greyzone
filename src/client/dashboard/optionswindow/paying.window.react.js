import './paying.window.styl';
import * as optionsActions from './actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class PayingWindow extends Component {
  changePaying(name, value) {
    optionsActions.changePaying(name, value);
  }

  render() {
    const {paying} = this.props;
    const base = paying ? paying.get('base') : false;
    const collector = paying ? paying.get('collector') : false;
    const revenge = paying ? paying.get('revenge') : false;
    return (
      <div id='PayingWindow'>
        <legend>Paying Status (Sandbox)</legend>
        <label><input checked={base} name='base' onChange={(e) => this.changePaying('base', base)} type='checkbox' /><span>Base</span></label>
        <label><input checked={collector} name='collector' onChange={(e) => this.changePaying('collector', collector)} type='checkbox' /><span>Collector</span></label>
        <label><input checked={revenge} name='revenge' onChange={(e) => this.changePaying('revenge', revenge)} type='checkbox' /><span>Revenge</span></label>
      </div>
    );
  }
}

PayingWindow.propTypes = {
  paying: React.PropTypes.instanceOf(immutable.Map)
};

export default PayingWindow;
