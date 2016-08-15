/* eslint curly: 0 */
/* String String(BoolString) -> String */

const bookAttention = function(attentionlevel, direction) {
  if (direction === 'down') {
    if (attentionlevel === 'none' || attentionlevel === 'low')
      return 'none';
    else if (attentionlevel === 'medium')
      return 'low';
    else if (attentionlevel === 'high')
      return 'medium';
  } else {
    if (attentionlevel === 'high' || attentionlevel === 'medium')
      return 'high';
    else if (attentionlevel === 'low')
      return 'medium';
    else if (attentionlevel === 'none')
      return 'low';
  }
};

export default bookAttention;
