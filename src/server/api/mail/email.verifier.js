import config from '../../config';

const emailVerifier = function(id, hash, email) {
  const activationlink = config.dns + config.apipath + `/auth/verify?id=` + id + `&hash=` + hash;
  let mailOptions = {
    from: '"GhostStruggle Authenticator" <keyholder@ghoststruggle.com>',
    to: process.env.NODE_ENV !== 'production' ? config.strawman : email,
    subject: 'GhostStruggle Signup Request',
    text: `Someone requested a sign up to Ghost Struggle web game for this email address.
      For its activation copy&paste following URL to your browser:
      ` + activationlink,
    html: `<p>Someone has requested a sign up to <b>Ghost Struggle web game</b> for this email.
      </p><p>For its activation click the following link or copy&paste it to your browser
      <a href='` + activationlink + `'>` + activationlink + `</a></p>`
  };

  return mailOptions;
};

export default emailVerifier;
