import express from 'express';
import Player from '../models/player';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    Player.find((err, players) => {
      if (err)
        res.send(err);
      else
        res.send(players.map(player => ({name: player.name, countrystats: player.countrystats})));
    });
  });

export default router;
