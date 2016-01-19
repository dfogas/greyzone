import express from 'express';
import Player from '../models/player';
import playerdefaults from '../../lib/playerdefaults';
// import localAuthenticator from '../strategies/local';

const router = express.Router();

router.route('/')
  .post((req, res) => {

    playerdefaults.name = req.body.name;
    playerdefaults.userId = req.body.userId ? req.body.userId : req.user._id; // ?!
    var player = new Player(playerdefaults);

    player.save((err) => {
      if (err)
        res.send(err);

      res.json({
        message: 'player added to player roster',
        data: player
      });
    });
  });

router.route('/')
  .get((req, res) => {
    Player.find((err, players) => {
      if (err)
        res.send(err);

      res.send(players);
    });
  });

router.route('/:player_id')
  .get((req, res) => {
    // console.log('Player controller says, req.user is: ', req.user);
    // console.log('Params player_id is: ', req.params.player_id);
    // findOne probably returns first found record
    Player.findOne({
      _id: req.params.player_id
    }, function(err, player) {
      if (err)
        res.send(err);

      res.send(player);
    });
  });

router.route('/:player_id')
  .put((req, res) => {
    // console.log(req.body.title, req.body.name, req.body.gameContacts, req.body.gameCash);

    Player.update(
      // we need params _id here else only 1st record from parent collection is updated
      // Model.update(criteria, doc, options, callback)
      {_id: req.params.player_id}, {$set: req.body}, {overwrite: true, upsert: true}, (err, raw) => {
        if (err)
          res.send(err);

        res.json({
          message: JSON.stringify(raw)
        });
      }
    );
  });

router.route('/:player_id')
  .delete((req, res) => {
    Player.remove({}, function(err) {
      if (err)
        res.send(err);

      res.json({message: 'Player deleted'});
    });
  });

export default router;
