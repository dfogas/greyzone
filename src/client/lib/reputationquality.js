/* Number -> String */

const reputationQuality = function(rep) {
  if (typeof rep !== 'number')
    throw new TypeError('reputation is not a number');

  if (rep < -5000)
    return 'catastrophic';
  else if (rep < -1500)
    return 'unreliable';
  else if (rep < 1500)
    return 'unremarkable';
  else if (rep < 5000)
    return 'good';
  else
    return 'excellent';
};

export default reputationQuality;
