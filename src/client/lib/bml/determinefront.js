/* String String => Boolean */

const determineFront = function(name, dicetype) {
  if (dicetype === 'electronics')
    return name === 'fail';
  else if (dicetype === 'operations')
    return name === 'fail';
  else if (dicetype === 'stealth')
    return name === 'fail';
  else
    return false;
};

export default determineFront;
