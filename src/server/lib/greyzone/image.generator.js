// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// simple random generator of agent's pictures paths
// function
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const profilePics = {
  operative: [
    '../../assets/img/agents/operative/operative1_128.jpg',
    '../../assets/img/agents/operative/operative2_128.jpg',
    '../../assets/img/agents/operative/operative3_128.jpg',
    '../../assets/img/agents/operative/operative4_128.jpg',
    '../../assets/img/agents/operative/operative5_128.jpg'
  ],
  spy: [
    '../../assets/img/agents/spy/spy1_128.jpg',
    '../../assets/img/agents/spy/spy2_128.jpg',
    '../../assets/img/agents/spy/spy3_128.jpg',
    '../../assets/img/agents/spy/spy4_128.jpg',
    '../../assets/img/agents/spy/spy5_128.jpg'
  ],
  technician: [
    '../../assets/img/agents/technician/tech1_128.jpg',
    '../../assets/img/agents/technician/tech2_128.jpg',
    '../../assets/img/agents/technician/tech3_128.jpg',
    '../../assets/img/agents/technician/tech4_128.jpg',
    '../../assets/img/agents/technician/tech5_128.jpg'
  ]
};

function generateImage(character) {
  return profilePics[character][Math.round(Math.random() * (profilePics[character].length - 1))];
}

export default generateImage;
