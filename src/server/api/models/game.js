import mongoose from 'mongoose';
const Schema = mongoose.schema;

var GameSchema = new Schema({
  events: [Schema.Types.Mixed],
  globals: {
    constants: {
      started: Number
    },
    countries: [Schema.Types.Mixed],
    enhancements: [Schema.Types.Mixed],
    equipments: [Schema.Types.Mixed],
    missions: [Schema.Types.Mixed],
    statuses: [Schema.Types.Mixed],
    options: {
      collector: Boolean,
      dolcevita: Boolean,
      revenge: Boolean
    },
    tasks: Schema.Types.Mixed
  }
});

var Game = mongoose.model('Game', GameSchema);

export default Game;
