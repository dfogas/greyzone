/* Falsy or Truthy -> JSArray
  shields against null or undefined when concatenating
  BML: false
*/

function checkThenConcat(item) {
  if (item)
    return [item];
  else
    return [];
}

export default checkThenConcat;
