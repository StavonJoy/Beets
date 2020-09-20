const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
    postedBy: String,
    message: String
  });

const messageSchema = new Schema({
    topic: {
        type: String,
        required: true
    },
    postedBy: { type: Schema.Types.ObjectId, ref: 'User'},
    replies: [replySchema],
    dateAdded: {
        type: Date,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Message', messageSchema);