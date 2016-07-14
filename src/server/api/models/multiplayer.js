import mongoose from 'mongoose';

const MultiplayerSchema = new mongoose.Schema({
  relation: {
    hash: String,
    turkeyId: String,
    type: String,
    wolfId: String
  }
});

const Multiplayer = mongoose.model('multiplayer', MultiplayerSchema);

export default Multiplayer;
