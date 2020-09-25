const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema(
  {
    name: String,
    createdBy: { type: Schema.Types.ObjectId, ref: 'User'},
    vibe: String,
    songs: [],
  },
  {
    timestamps: true,
  });

  module.exports = mongoose.model('Playlist', playlistSchema)
