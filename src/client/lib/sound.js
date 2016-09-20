/*
  String(path) -> Side Effect(or null)
  stolen from W3C schools
  BML: false
*/
import {jsonapiCursor} from '../state';

const Sound = function(src) {
  this.sound = document.createElement('audio');
  this.sound.src = src;
  this.sound.setAttribute('preload', 'auto');
  this.sound.setAttribute('controls', 'none');
  this.sound.style.display = 'none';
  document.body.appendChild(this.sound);
  this.play = function() {
    this.sound.play();
  };
  this.stop = function() {
    this.sound.pause();
  };
};

const playSound = function(src) {
  if (jsonapiCursor(['options', 'soundeffects'])) {
    let mySound = new Sound(src);
    mySound.play();
  } else return null;
};

export default playSound;
