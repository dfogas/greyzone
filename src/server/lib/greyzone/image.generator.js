// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// simple random generator of agent's pictures paths
// function
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

import ProfilePics from './profilepics.list';

function generateImage(character) {
  return ProfilePics[character][Math.round(Math.random() * (ProfilePics[character].length - 1))];
}

export default generateImage;
