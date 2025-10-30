const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
  role: {
    type: String,
    enum: ['user', 'assistant'],
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, { timestamps: true });

const chatSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  title: { type: String, required: true },
  messages: [messageSchema]
}, { timestamps: true }); // Adds createdAt and updatedAt

module.exports = mongoose.model('Chat', chatSchema);