/* itemtosave(JSObject) path(String) storage(String) -> (Boolean)
  obecně jaká je problematika u localStorage
  1) get item on path from storage
  2) check whether there is an item if so JSON.parse(item)
  3) per business logic and datatype set item on path in storage
    a) konvert to plain JS if immutable (?contested)
    b) JSON stringify the saved item
  TODO: finish it, probably with some imported library
*/

const saveToStorage = function(item, path, storage) {
  return false;
};

export default saveToStorage;
