const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
    postedBy: String,
    replyMessage: String
  });

const messageSchema = new Schema({
    topic: {
        type: String,
        required: true
    },
    postedBy: { type: Schema.Types.ObjectId, ref: 'User'},
    post: String,
    replies: [replySchema],
}, { timestamps: true })

module.exports = mongoose.model('Message', messageSchema);