const Message = require('../models/message');

module.exports = {
    create,
    index,
    delete: deleteOne,
    update
}

function index(req, res) {
    Message.find({})
    .populate('postedBy')
    .then(messages => {res.json(messages)})
    .catch(err => {res.json(err)})
  }

function deleteOne(req, res) {
    Message.findByIdAndDelete(req.params.id)
        .then(message => {res.json(message)})
        .catch(err => {res.json(err)})
}
  
function create(req, res) {
    req.body.postedBy = req.user._id
    Message.create(req.body)
        .then(message => { res.json(message) })
        .catch(err => { res.json(err) })
}

function update(req, res) {
    Message.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .populate('postedBy')
    .then(message => {res.json(message)})
    .catch(err => {res.json(err)})
}