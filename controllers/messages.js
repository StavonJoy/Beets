const Message = require('../models/message');

module.exports = {
    create,
    index,
    delete: deleteOne,
    update,
    show
}

function show(req,res) {
    console.log('show controller')
    Message.findById(req.params.id)
    .then(messages => {res.json(messages)})
    .catch(err => {res.json(err)})
}

function index(req, res) {
    console.log('index controller')
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