/* String -> String
  selfexplanatory
*/

function capitalLetter(string) {
  if (typeof string !== 'string')
    throw new TypeError('argument to function capitalLetter must be a string');
  const firstCapital = string.slice(0, 1).toUpperCase();
  const rest = string.slice(1, string.length);
  return firstCapital + rest;
}

export default capitalLetter;
