/* Number<0, 3> -> String */

const obscurityQuality = function(obs) {
  if (obs < 0 || obs > 3)
    throw new RangeError('value is over 3 or under 0');
  if (obs < 1)
    return 'vulnerable';
  else if (obs < 2)
    return 'safe';
  else
    return 'invisible';
};

export default obscurityQuality;
