// import express from 'express';
// import mongoose from 'mongoose'; // is it necessary???
// import Game from '../models/game';
//
// const router = express.Router();
//
// router.route('/game')
//   .get((req, res) => {
//     Game.find((err, game) => {
//       if (err)
//         res.send(err);
//
//       res.send(game);
//     });
//   });
//
// router.route('/game')
//   .put((req, res) => {
//     if (req.body.mission)
//       // Model.findOneAndUpdate(conditions, update, [options], [callback])
//       // returns Query
//       // Finds a matching document, updates it according to the update arg,
//       // passing any options, and returns the found document (if any) to the callback.
//       // The query executes immediately if callback is passed else a Query object is returned.
//       Game.findOneAndUpdate(
//         {name: req.body.mission.inCountry},
//         {$set: {missionstoaccept: missionstoaccept.push(req.body.mission)}}, // this is probably not possible or wrongly written need to check
//         {new: true},
//         (err, raw) => {
//           if (err)
//             res.send(err);
//
//           res.json({
//             message: JSON.stringify(raw)
//           });
//         }
//       );
//     if (req.body.agentsforhire)
//       // Model.update(conditions, doc, [options], [callback])
//       // returns Query
//       // Updates documents in the database without returning them
//       Game.update(
//         {},
//         {agentsforhire: agentsforhire.concat(req.body.agentsforhire)}, // this is probably not possible or wrongly written need to check
//         {new: true,upsert: true},
//         (err, raw) => {
//           if (err)
//             res.send(err);
//
//           res.json({
//             messsage: JSON.stringify(raw)
//           });
//         }
//       );
//   });
