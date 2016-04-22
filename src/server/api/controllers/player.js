import express from 'express';
import Player from '../models/player';
import playerdefaults from '../../lib/playerdefaults';
// import localAuthenticator from '../strategies/local';

const router = express.Router();

// router.route('/')
//   .post((req, res) => {
//
//     playerdefaults.name = req.body.name;
//     playerdefaults.userId = req.body.userId ? req.body.userId : req.user._id;
//     var player = new Player(playerdefaults);
//
//     player.save((err) => {
//       if (err)
//         res.send(err);
//       else
//         res.json({
//           // data: player,
//           message: 'player added to player roster',
//           name: player.name
//         });
//     });
//   });

// router.route('/')
//   .get((req, res) => {
//     Player.find((err, players) => {
//       if (err)
//         res.send(err);
//
//       res.send(players);
//     });
//   });
//
// router.route('/:player_id')
//   .get((req, res) => {
//     Player.findOne({
//       _id: req.params.player_id
//     }, function(err, player) {
//       if (err)
//         res.send(err);
//
//       res.send(player);
//     });
//   });

router.route('/:player_id')
  .put((req, res) => {

    Player.update(
      // TODO: rewrite through findById and save combination
      // we need params _id here else only 1st record from parent collection is updated
      // Model.update(criteria, doc, options, callback)
      {_id: req.params.player_id}, {$set: req.body}, {overwrite: true, upsert: true}, (err, raw) => {
        if (err)
          res.send(err);

        else
          res.json({
            message: 'state successfully updated', 
            body: JSON.stringify(raw)
          });
      }
    );
  });

// router.route('/:player_id')
//   .delete((req, res) => {
//     Player.remove({}, function(err) {
//       if (err)
//         res.send(err);
//
//       res.json({message: 'Player deleted'});
//     });
//   });

export default router;
