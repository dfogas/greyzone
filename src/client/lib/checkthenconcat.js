/* Falsy or Truthy -> JSArray */

function checkThenConcat(item) {
  if (item)
    return [item];
  else
    return [];
}

export default checkThenConcat;
