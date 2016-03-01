/*
  Number -> String
*/

export default function dayandtime(ts, tz) {
  const t = (new Date(ts + tz * 60 * 1000).toString());
  // t is like 'Sun Feb 07 2016 20:51:10 GMT+0100'
  return t.slice(11,15) + '-' + t.slice(4,7) + '-' + t.slice(8,10) + ' ' + t.slice(16,21) + ' GMT';
}

// given: 0, -60(CET) expected: 1970-Jan-01 00:00 GMT
