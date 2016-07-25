/* eslint curly: 0 */
import Mission from '../lib/greyzone/mission.generator';

function multiplayer(socket) {
  console.log('user has connected');// eslint-disable-line no-console

  socket.on('mission', function(msg) {
    console.log('mission socket event');// eslint-disable-line no-console

    let discoveredchance = Math.random() > 0.5;
    console.log('discovered chance: ' + discoveredchance);
    if (discoveredchance && !msg.firstmission) {
      if ((msg.tag !== 'discovered' && msg.tag !== 'noticed') && msg.tier >= 3) {
        console.log('Agents spotted. New Mission in Briefing room - Discovered!');
        let mission = Mission('Discovered!', msg.tier, 10 * 60 * 1000, true);
        mission.inCountry = msg.inCountry;
        socket.emit('new mission', mission);
      } else {
        if ((msg.tag !== 'noticed' && msg.tag !== 'discovered') && msg.tier <= 3) { // eslint-disable-line no-lonely-if
          console.log('Somebody started investigation related to your activities. New Mission in Briefing room - Noticed!');
          let mission = Mission('Noticed!', msg.tier, 10 * 60 * 1000, true);
          mission.inCountry = msg.inCountry;
          socket.emit('new mission', mission);
        } else console.log('Operations are too high, officials looking away.');
      }
    } else console.log('Mission went smoothly.');
  });
}

export default multiplayer;
