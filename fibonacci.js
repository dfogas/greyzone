function fibonnaci(n) {
  if (typeof(n) !== 'number')
    return 'type invalid, n must be number';
  if (n < 1)
    return 'defined for [1 ... Infinity]';
  for (var i = 1; i <= n; i += 1) {
    var start = [0, 1];
    i === 1 ? start : start.push(start[start.length - 2] + start[start.length - 1]);
  }
  return start;
}
