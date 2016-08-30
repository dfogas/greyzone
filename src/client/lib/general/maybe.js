/*
  this is transcript of Maybe monad as demonstrated in article of James Sinclair
  http://jrsinclair.com/articles/2016/marvellously-mysterious-javascript-maybe-monad/
*/

let Maybe = function(val) {
  this.__value = val;
};

Maybe.of = function(val) {
  return new Maybe(val);
};

Maybe.prototype.isNothing = function() {
  return (this.__value === null || (typeof this.__value === 'undefined'));
};

Maybe.prototype.map = function(f) {
  if (this.isNothing())
    return Maybe.of(null);
  else
    return Maybe.of(f(this.__value));
};

export default Maybe;
