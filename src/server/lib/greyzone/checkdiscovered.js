import Player from '../../api/models/player';

function checkDiscovered(socket) {
  Player.find((err, players) => {
    if (err)
      throw err;
    else if (socket)
      socket.emit('check discovered', players.filter(player => player.countrystats.filter(cs => cs.obscurity === 0).length > 2));
  });
  console.log('check discovered players');
}

export default checkDiscovered;
