/* Number Number -> Number
  kontroluje rozmezí, vlastně by se dalo generalizovat pokud by se přidalo min a max do parametrů fce
  BML: true
*/

function bookObscurity(val, change) {
  if (val + change >= 3)
    return 3;
  else if (val + change <= 0)
    return 0;
  else
    return val + change;
}

export default bookObscurity;
