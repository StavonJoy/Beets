const Playlist = require('../models/playlist');

module.exports = {
    create,
    index,
    delete: deleteOne,
    addToPlaylist
}

//why are we populating createdBy again?

function index(req, res) {
    Playlist.find({})
    .populate('createdBy')
    .then(playlists => {res.json(playlists)})
    .catch(err => {res.json(err)})
  }

function deleteOne(req, res) {
    Playlist.findByIdAndDelete(req.params.id)
        .then(playlist => {res.json(playlist)})
        .catch(err => {res.json(err)})
}
  
function create(req, res) {
    req.body.createdBy = req.user._id
    Playlist.create(req.body)
        .then(playlist => { res.json(playlist) })
        .catch(err => { res.json(err) })
}

function addToPlaylist(req, res) {
    Playlist.findById(req.params.id)
    .populate('createdBy')
    .then(playlist => {
        playlist.songs.push(req.body)
        playlist.save()
        .then(() => res.json(playlist))
    .catch(err => {res.json(err)})
    })
}