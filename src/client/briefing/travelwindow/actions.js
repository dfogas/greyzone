import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';
import {gameCursor, jsonapiCursor} from '../../state';
import bookTraveling from '../../lib/bml/booktraveling';

export function bookPrice(price) {
  dispatch(bookPrice, price);
}

export function changeCountry(option) {
  // TODO: změnit countryofoperation na novou programovanou komponentu místo dropdownu
  // make a wish
  // console.log('travel cost: ', bookTraveling(jsonapiCursor(), gameCursor(), option).toJS());
  bookPrice(bookTraveling(jsonapiCursor(), gameCursor(), option));
  setTimeout(() => {dispatch(changeCountry, option); }, 10);
  travelWindowToggle();
  screenPlasticToggle();
  setTimeout(() => {
    travelWindowToggle();
    screenPlasticToggle();
  }, 10000);
}

export function moveDot() {
  moveProgressBarDot();
}

export function moveProgressBarDot() {
  const myInterval = setInterval(() => dispatch(moveProgressBarDot, {}), 500);
  setTimeout(() => clearInterval(myInterval), 10000);
}

export function screenPlasticToggle() {
  dispatch(screenPlasticToggle, {});
}

export function travelWindowToggle() {
  dispatch(travelWindowToggle, {});
}

setToString('progressbar', {
  bookPrice,
  changeCountry,
  moveProgressBarDot,
  screenPlasticToggle,
  travelWindowToggle
});
