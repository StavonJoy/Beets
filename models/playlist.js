const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//collaborators is a stretch goal

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
