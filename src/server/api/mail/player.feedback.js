const playerFeedback = function(feedback, email) {
  let mailOptions = {
    from: '"GhostStruggle Feedback Facilitator" <keyholder@ghoststruggle.com>',
    to: 'support@ghoststruggle.com',
    subject: 'GhostStruggle Player Feedback',
    text: `Player counts himself in the ${feedback.gaminggroup} gaming group.
      She played for ${feedback.playduration} hours and in ${feedback.browser}
      browser.
      She experienced ${feedback.technicals} gameplay and reached ${feedback.resultofplay}
      ending.
      She gives ${Object.keys(feedback.stars).map(key => {
        return `game ${key} ${feedback.stars[key]} stars, `;
      }).toString()} and thinks that game has value of ${feedback.gamevalue} U.S. Dollars.
      She also commented on game like this: ${feedback.generalopinion}`,
    html: `<p>Player counts himself in the ${feedback.gaminggroup} gaming group.</p>
      <p>She played for ${feedback.playduration} hours and in ${feedback.browser}
      browser.</p>
      <p>She experienced ${feedback.technicals} gameplay and reached ${feedback.resultofplay}
      ending.</p>
      <p>She gives ${Object.keys(feedback.stars).map(key => {
        return `<li>game ${key} ${feedback.stars[key]} stars</li>,`;
      }).toString()} and thinks that game has value of ${feedback.gamevalue} U.S. Dollars.</p>
      She also commented on game like this: ${feedback.generalopinion}`
  };
  return mailOptions;
};

export default playerFeedback;
