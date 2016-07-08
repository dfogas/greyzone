import './paying.window.styl';
import * as optionsActions from './actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class PayingWindow extends Component {
  changePaying(ev) {
    ev.preventDefault();
    optionsActions.changePaying(ev.target.name, ev.target.checked);
  }

  render() {
    const {paying} = this.props;
    const base = paying ? paying.get('base') : false;
    const collector = paying ? paying.get('collector') : false;
    const revenge = paying ? paying.get('revenge') : false;
    return (
      <div id='PayingWindow'>
        <legend>Paying Status</legend>
        <label><input checked={base} name='base' onChange={(e) => this.changePaying(e)} type='checkbox' />Base</label>
        <label><input checked={collector} name='collector' onChange={(e) => this.changePaying(e)} type='checkbox' />Collector</label>
        <label><input checked={revenge} name='revenge' onChange={(e) => this.changePaying(e)} type='checkbox' />Revenge</label>
      </div>
    );
  }
}

PayingWindow.propTypes = {
  paying: React.PropTypes.instanceOf(immutable.Map)
};

export default PayingWindow;
