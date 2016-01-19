import mongoose from 'mongoose';
const Schema = mongoose.schema;

var GameSchema = new Schema({
  events: [Schema.Types.Mixed],
  globals: {
    agentsforhire: [Schema.Types.Mixed],
    constants: {
      started: Number
    },
    countries: [Schema.Types.Mixed]
  }
});

var Game = mongoose.model('Game', GameSchema);

export default Game;
