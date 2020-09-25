const User = require("../models/user");

module.exports = {
  index,
  showProfile,
  update
};

function showProfile(req, res){
  User.findById(req.user._id)
  .then((users) => res.json(users))
}

function index(req, res) {
  User.find({}).then((users) => res.json(users));
}

function update(req, res){
  User.findByIdAndUpdate(req.user._id, req.body, {new: true})
  .then((user)=> res.json(user))
}