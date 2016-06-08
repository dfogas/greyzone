/* [Number] Number Min Max -> Number
  pick from interval of numbers the number which is not reserved
*/

function reservedPick(reserved, pick, min, max) {
  if (reserved.length === max + 1)
    return pick;
  else if (reserved.indexOf(pick) === -1)
    return pick;
  else if (pick === max)
    return reservedPick(reserved, min, min, max);
  else
    return reservedPick(reserved, pick + 1, min, max);
}

export default reservedPick;
