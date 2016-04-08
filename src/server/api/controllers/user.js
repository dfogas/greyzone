import express from 'express';
import User from '../models/user';

const router = express.Router();

// router.route('/')
//   .get((req, res) => {
//     User.find((err, users) => {
//       if (err)
//         res.send(err);
//
//       res.send(users);
//     });
//   });
//
// router.route('/:user_id')
//   .get((req, res) => {
//     User.findById(req.params.user_id, (err, user) => {
//       if (err)
//         res.send(err);
//       res.json(user);
//     });
//   });

export default router;
