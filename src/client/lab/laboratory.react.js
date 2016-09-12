import './laboratory.styl'; //
import './die.animations.styl';
import Component from '../components/component.react';
import React from 'react';

class Laboratory extends Component {
  render() {
    return (
      <div id='LaboratoryPage'>
        <div id="background"></div>
          <div id="wrapper">
            <input id="secondroll" name="roll" type="checkbox" />
            <input id="roll" name="roll" type="checkbox" />
            <label htmlFor="roll">Roll it!</label>
            <label htmlFor="secondroll">Stop!</label>
            <div id="platform">
              <div id="dice">
                <div className="side front">
                </div>
                <div className="side front inner">
                </div>
                <div className="side top">
                </div>
                <div className="side top inner"></div>
                <div className="side right">
                </div>
                <div className="side right inner"></div>
                <div className="side left">
                </div>
                <div className="side left inner"></div>
                <div className="side bottom">
                </div>
                <div className="side bottom inner"></div>
                <div className="side back">
                </div>
                <div className="side back inner"></div>
                <div className="side cover x"></div>
                <div className="side cover y"></div>
                <div className="side cover z"></div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Laboratory;
