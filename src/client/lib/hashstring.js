/* String -> Number
  http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
  BML: false
*/

function hashString(string) {
  var hash = 0, i, chr, len;
  if (string.length === 0) return '';
  for (i = 0, len = string.length; i < len; i += 1) {
    chr = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // convert to 32bit string
  }
  return hash;
}

export default hashString;
