import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  achievements: [Schema.Types.Mixed],
  activemission: Schema.Types.Mixed,
  agentbeingsaved: Schema.Types.Mixed,
  agentinarmory: Schema.Types.Mixed,
  agents: [Schema.Types.Mixed],
  campaigns: Schema.Types.Mixed,
  components: Schema.Types.Mixed,
  countrystats: [Schema.Types.Mixed],
  dashboard: Schema.Types.Mixed,
  enhancements: [Schema.Types.Mixed],
  equipments: [Schema.Types.Mixed],
  gameend: String,
  gameCash: {
    type: Number,
    min: 0
  },
  gameContacts: {
    type: Number,
    min: 0
  },
  log: [Schema.Types.Mixed],
  missions: [Schema.Types.Mixed],
  missionsDone: [Schema.Types.Mixed],
  multiplayer: Schema.Types.Mixed,
  name: {
    type: String,
    unique: false,
    required: true
  },
  options: Schema.Types.Mixed,
  organization: Schema.Types.Mixed,
  paying: {
    base: Boolean,
    collector: Boolean,
    revenge: Boolean
  },
  self: Schema.Types.Mixed,
  started: Number,
  statistics: Schema.Types.Mixed,
  statuses: [Schema.Types.Mixed],
  userId: String,
  title: {
    type: String,
    unique: false,
    required: true
  },
  tutorial: Schema.Types.Mixed
});

var Player = mongoose.model('Player', PlayerSchema);

export default Player;
