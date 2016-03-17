import config from '../../config';

const lostPassword = function(hash, email) {
  const verificationlink = config.dns + `/reauthenticate?hash=` + hash;
  let mailOptions = {
    from: '"GhostStruggle Authenticator"<keyholder@ghoststruggle.com>',
    to: process.env.NODE_ENV === 'production' ? email : config.strawman,
    subject: 'GhostStruggle Account Lost Password Recovery',
    text: `Someone issued a lost password recovery request for Ghost Struggle web game account
      for this email address.
      For the final phase of password recovery process copy&paste following URL to your browser:
      ` + verificationlink,
    html: `<p>Someone issued a lost password recovery request for <b>Ghost Struggle web game account</b>
      for this email.
      </p><p>For for the final phase of password recovery process click the following link or copy&paste it to your browser
      <a href='` + verificationlink + `'>` + verificationlink + `</a></p>`
  };

  return mailOptions;
};

export default lostPassword;
