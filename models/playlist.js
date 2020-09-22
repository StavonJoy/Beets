const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//collaborators is a stretch goal

const playlistSchema = new Schema(
  {
    name: String,
    createdBy: String,
    songs: [String],
    // collaborators: [String],
  },
  {
    timestamps: true,
  });

  module.exports = mongoose.model('Playlist', playlistSchema)
