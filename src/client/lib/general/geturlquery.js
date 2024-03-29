// taken from http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
/*
  String(name of url query value) String(URL) -> String(url query value)
  BML: false
*/

function getParameterByName(name, url) {
  if (!url)
    url = window.location.href;
  url = url.toLowerCase(); // This is just to avoid case sensitiveness
  name = name.replace(/[\[\]]/g, '\\$&').toLowerCase();// This is just to avoid case sensitiveness for query parameter name
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export default getParameterByName;
