/*
  OK, napíšem to hezčejc
*/

export default function formatMoney(num, c, d, t) {
  c = isNaN(c) ? 2 : c;
  d = d || '.';
  t = t || ',';
  const s = num < 0 ? '-' : '';
  const i = parseInt(num = Math.abs(+num || 0).toFixed(c), 10) + '';
  var j = (j = i.length) > 3 ? j % 3 : 0;
  return (
    s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + Math.abs(num - i).toFixed(c).slice(2) : '')
  );
}
