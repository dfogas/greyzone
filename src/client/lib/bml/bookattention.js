/* eslint curly: 0 */
/* String String(BoolString) -> String */

const bookAttention = function(attentionlevel, direction) {
  if (direction === 'down') {
    if (attentionlevel === 'none' || attentionlevel === 'low')
      return 'none';
    else if (attentionlevel === 'mid')
      return 'low';
    else if (attentionlevel === 'high')
      return 'mid';
    else return 'none'; // return value catching
  } else if (direction === 'up') {
    if (attentionlevel === 'high' || attentionlevel === 'mid')
      return 'high';
    else if (attentionlevel === 'low')
      return 'mid';
    else if (attentionlevel === 'none')
      return 'low';
    else return 'none'; // return value catching
  } else return 'none'; // return value catching
};

export default bookAttention;
