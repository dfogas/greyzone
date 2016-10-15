import './rotating.die.styl'; //
import './second.rotating.die.styl';
import './third.rotating.die.styl';
import './fourth.rotating.die.styl';
import './fifth.rotating.die.styl';
import './sixth.rotating.die.styl';
import './seventh.rotating.die.styl';
import './eighth.rotating.die.styl';
import './ninth.rotating.die.styl';
import './tenth.rotating.die.styl';
import './eleventh.rotating.die.styl';
import './twelveth.rotating.die.styl';
import './thirtienth.rotating.die.styl';
import './fourteenth.rotating.die.styl';
import './die.animations.styl';
import * as rotatingDieActions from './actions';
import Component from '../../../components/component.react';
import React from 'react';
import animationnames from '../../../lib/bml/dieanimations';
import classnames from 'classnames';
import immutable from 'immutable';
import randomInt from '../../../lib/getrandomint';
import uuid from '../../../lib/guid';

class RotatingDie extends Component {
  drag(ev) {
    const {diceindex, dicetype, dicekey, name} = this.props;
    ev.dataTransfer.setData('text', JSON.stringify({diceindex: diceindex, dicetype: dicetype, dicekey: dicekey, name: name}));
    // console.log(JSON.stringify({diceindex: diceindex, dicetype: dicetype, dicekey: dicekey, name: name}));
  }

  selectForReroll() {
    const {diceindex} = this.props;

    rotatingDieActions.selectForReroll(diceindex);
  }

  render() {
    const {diceindex, dicetype, name, jsonapi} = this.props;
    const isSpin = jsonapi.getIn(['activemission', 'dicespin']);
    return (
      <div
        className={classnames('rotating-die', {'rollable': this.props.rollable})}
        diceindex={diceindex}
        dicetype={dicetype}
        draggable={true}
        id={`Dice${diceindex}`}
        key={uuid() + 'dice'}
        name={name}
        onClick={this.selectForReroll.bind(this)}
        onDragStart={this.drag.bind(this)}
        style={isSpin
          ? {animation: `${animationnames[(randomInt(0, 2))]} 2s infinite linear`}
          : {animationPlayState: `paused`}
        }>
        <div
          className={`side front ${dicetype}`}
          style={{backgroundImage: `url(../../../../../assets/img/missions/actions/${name}.png)`}}>
        </div>
        <div className='side front inner'>
        </div>
        <div className={`side top ${dicetype}`}>
        </div>
        <div className='side top inner'></div>
        <div className={`side right ${dicetype}`}>
        </div>
        <div className='side right inner'></div>
        <div className={`side left ${dicetype}`}>
        </div>
        <div className="side left inner"></div>
        <div className={`side bottom ${dicetype}`}>
        </div>
        <div className="side bottom inner"></div>
        <div className={`side back ${dicetype}`}>
        </div>
        <div className="side back inner"></div>
        <div className="side cover x"></div>
        <div className="side cover y"></div>
        <div className="side cover z"></div>
      </div>
    );
  }
}

RotatingDie.propTypes = {
  diceindex: React.PropTypes.number,
  dicekey: React.PropTypes.string,
  dicetype: React.PropTypes.string.isRequired,
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  key: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  rollable: React.PropTypes.bool
};

export default RotatingDie;
