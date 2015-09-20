import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  name: {
    type: String,
    unique: false,
    required: true
  },
  userId: String,
  title: {
    type: String,
    unique: false,
    required: true
  },
  gameCash: {
    type: Number,
    min: 0
  },
  gameContacts: {
    type: Number,
    min: 0
  },
  agents: [Schema.Types.Mixed],
  missions: [Schema.Types.Mixed],
  countries: [Schema.Types.Mixed],
  equipments: [Schema.Types.Mixed],
  componentsstates: [Schema.Types.Mixed],
  agentinarmory: Schema.Types.Mixed,
  activemission: Schema.Types.Mixed,
  agentforhire: Schema.Types.Mixed,
  missiontoaccept: Schema.Types.Mixed
});

var Player = mongoose.model('Player', PlayerSchema);


export default Player;
