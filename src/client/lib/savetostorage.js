/* itemtosave(JSObject) path(String) storage(String) -> (Boolean)
  obecně jaká je problematika u - v řešení lockr
  1) get item on path from storage
  2) check whether there is an item if so JSON.parse(item)
  3) per business logic and datatype set item on path in storage
    a) konvert to plain JS if immutable (?contested)
    b) JSON stringify the saved item
*/

const saveToStorage = function(item, path, storage) {
  return false;
};

export default saveToStorage;
