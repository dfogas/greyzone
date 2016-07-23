/*
  DOMElement, String, String, Number, Number, Number
  mutates DOM
  stolen
  TODO: get rid of it, perhaps keep for amusement purposes
*/

function animate(elem, style, unit, from, to, time) {
  if (!elem) return;
  var start = new Date().getTime(),
  timer = setInterval(function() {
    var step = Math.min(1, (new Date().getTime() - start) / time);
    elem.style[style] = (from + step * (to - from)) + unit;
    if (step === 1)
      clearInterval(timer);
  }, 10);
  elem.style[style] = from + unit;
}

export default animate;
