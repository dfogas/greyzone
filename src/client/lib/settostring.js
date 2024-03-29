/*
  Override toString of Flux actions.
  Flowtype here - nice
  BML: false
*/
export default function setToString(prefix: string, object: Object) {
  Object.keys(object).forEach((name) => {
    const toStringName = prefix + '/' + name;
    object[name].toString = () => toStringName;
  });
}
