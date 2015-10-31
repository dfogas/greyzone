import './laboratory.styl';
import Component from '../components/component.react';
import React from 'react';

class Laboratory extends Component {
  render() {
    return (
      <div classNameName='laboratory'>
        <div id="background"></div>
          <div id="wrapper">
            <input id="secondroll" name="roll" type="checkbox" />
            <input id="roll" name="roll" type="checkbox" />
            <label forHtml="roll">Roll it!</label>
            <label forHtml="secondroll"><span>Stop!</span></label>
            <div id="platform">
              <div id="dice">
                <div className="side front">
                  <div className="dot center"></div>
                </div>
                <div className="side front inner"></div>
                <div className="side top">
                  <div className="dot dtop dleft"></div>
                  <div className="dot dbottom dright"></div>
                </div>
                <div className="side top inner"></div>
                <div className="side right">
                  <div className="dot dtop dleft"></div>
                  <div className="dot center"></div>
                  <div className="dot dbottom dright"></div>
                </div>
                <div className="side right inner"></div>
                <div className="side left">
                  <div className="dot dtop dleft"></div>
                  <div className="dot dtop dright"></div>
                  <div className="dot dbottom dleft"></div>
                  <div className="dot dbottom dright"></div>
                </div>
                <div className="side left inner"></div>
                <div className="side bottom">
                  <div className="dot center"></div>
                  <div className="dot dtop dleft"></div>
                  <div className="dot dtop dright"></div>
                  <div className="dot dbottom dleft"></div>
                  <div className="dot dbottom dright"></div>
                </div>
                <div className="side bottom inner"></div>
                <div className="side back">
                  <div className="dot dtop dleft"></div>
                  <div className="dot dtop dright"></div>
                  <div className="dot dbottom dleft"></div>
                  <div className="dot dbottom dright"></div>
                  <div className="dot center dleft"></div>
                  <div className="dot center dright"></div>
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
