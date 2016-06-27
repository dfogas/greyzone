import express from 'express';
import Player from '../models/player';

const router = express.Router();

router.route('/:player_id')
  .put((req, res) => {

    Player.update(
      // TODO: rewrite through findById and save combination
      // we need params _id here else only 1st record from parent collection is updated
      // Model.update(criteria, doc, options, callback)
      {userId: req.params.player_id}, {$set: req.body}, {overwrite: true, upsert: true}, (err, raw) => {
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

export default router;
