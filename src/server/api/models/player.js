import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  achievements: [Schema.Types.Mixed],
  activemission: Schema.Types.Mixed,
  agentsforhire: [Schema.Types.Mixed],
  agentinarmory: Schema.Types.Mixed,
  agents: [Schema.Types.Mixed],
  componentsstates: [Schema.Types.Mixed],
  countrystats: [Schema.Types.Mixed],
  equipments: [Schema.Types.Mixed],
  gameCash: {
    type: Number,
    min: 0
  },
  gameContacts: {
    type: Number,
    min: 0
  },
  missions: [Schema.Types.Mixed],
  missionstoaccept: [Schema.Types.Mixed],
  name: {
    type: String,
    unique: false,
    required: true
  },
  organization: Schema.Types.Mixed,
  userId: String,
  title: {
    type: String,
    unique: false,
    required: true
  }
});

var Player = mongoose.model('Player', PlayerSchema);

export default Player;
